import { NextFunction, Request, Response } from 'express';
export function pathParamValidator(validators: any){
    return function(req: Request, res: Response, next: NextFunction){
        for(let v in validators){
            if(!validators[v](req.params[v])){
                return res.status(400).send()
            }
        }
        next()
    }
}