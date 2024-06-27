import { Request, Response } from 'express';
import { getParkingSlot } from './controller';
import { getParkingSlotByName } from './repository';
import { getActiveParkingAllocation } from '../parking-allocations/service';

jest.mock('./repository');
jest.mock('../parking-allocations/service');

describe('getParkingSlot', () => {
    const mockRequest = {
        params: { slot: 'P2-S3' }
    } as unknown as Request;

    const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    } as unknown as Response;

    const mockNext = jest.fn();

    it('should return parking slot availability', async () => {
        (getParkingSlotByName as jest.Mock).mockReturnValue({ name: 'P2-S3' });
        (getActiveParkingAllocation as jest.Mock).mockReturnValue(null);

        await getParkingSlot(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.send).toHaveBeenCalledWith({ name: 'P2-S3', available: true });
    });

    it('should return 404 if parking slot not found', async () => {
        (getParkingSlotByName as jest.Mock).mockReturnValue(null);

        await getParkingSlot(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalledWith('not found');
    });
});
