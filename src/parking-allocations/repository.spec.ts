import { getParkingAllocationBySlot } from './repository';

describe('getParkingAllocationBySlot', () => {
    it('should return parking allocation by slot', () => {
        const result = getParkingAllocationBySlot('P2-S3');
        expect(result).toEqual({
            slot: 'P2-S3',
            vehicle: expect.any(String),
            entry: expect.any(String),
            exit: null
        });
    });

    it('should return undefined if slot not found', () => {
        const result = getParkingAllocationBySlot('P1-S1');
        expect(result).toBeUndefined();
    });
});
