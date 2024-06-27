import { Request, Response, NextFunction } from 'express';
import {pathParamValidator} from './validation-middleware';

describe('pathParamValidator middleware', () => {
    let req: Request;
    let res: Response;
    let next: NextFunction;

    beforeEach(() => {
        req = {} as Request;
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response;
        next = jest.fn();
    });

    it('should call next() if all validators pass', () => {
        const validators = {
            id: (param: any) => typeof param === 'string' && param.length === 5
        };

        req.params = {
            id: 'abcde'
        };

        const middleware = pathParamValidator(validators);
        middleware(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(res.send).not.toHaveBeenCalled();
    });

    it('should return 400 status if any validator fails', () => {
        const validators = {
            id: (param: any) => typeof param === 'string' && param.length === 5
        };

        req.params = {
            id: 'abcdef'
        };

        const middleware = pathParamValidator(validators);
        middleware(req, res, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalled();
    });

    it('should handle multiple validators', () => {
        const validators = {
            id: (param: any) => typeof param === 'string' && param.length === 5,
            category: (param: any) => ['books', 'electronics'].includes(param)
        };

        req.params = {
            id: 'abcde',
            category: 'electronics'
        };

        const middleware = pathParamValidator(validators);
        middleware(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(res.send).not.toHaveBeenCalled();
    });
});
