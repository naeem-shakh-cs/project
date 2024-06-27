import { Request, Response } from 'express';
import { postParkingAllocation } from './controller';
import { getFirstAvailableParkingSlot } from '../parking-lot/service';
import parkingAllocations from './data';

jest.mock('../parking-lot/service');

describe('postParkingAllocation', () => {
    const mockRequest = {
        params: { vehicle: 'MH14IO2030' }
    } as unknown as Request;

    const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    } as unknown as Response;

    beforeEach(() => {
        jest.clearAllMocks();
        parkingAllocations.splice(0, parkingAllocations.length);
    });

    it('should create parking allocation if slot is available', async () => {
        (getFirstAvailableParkingSlot as jest.Mock).mockReturnValue({ name: 'P2-S3' });

        await postParkingAllocation(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.send).toHaveBeenCalledWith({
            slot: 'P2-S3',
            vehicle: 'MH14IO2030',
            entry: expect.any(String),
            exit: null
        });
        expect(parkingAllocations.length).toBe(1);
    });

    it('should return 422 if parking lot is full', async () => {
        (getFirstAvailableParkingSlot as jest.Mock).mockReturnValue(null);

        await postParkingAllocation(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(422);
        expect(mockResponse.send).toHaveBeenCalledWith('Parking lot is full');
        expect(parkingAllocations.length).toBe(0);
    });
});
