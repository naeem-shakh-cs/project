import { getActiveParkingAllocation } from './service';
import { getParkingAllocationBySlot } from './repository';

jest.mock('./repository');

describe('getActiveParkingAllocation', () => {
    it('should return active parking allocation if found', () => {
        (getParkingAllocationBySlot as jest.Mock).mockReturnValue({
            slot: 'P2-S3',
            vehicle: 'MH14IO2030',
            entry: Date.now().toString(),
            exit: null
        });

        const result = getActiveParkingAllocation('P2-S3');
        expect(result).toBeTruthy();
        expect(result?.vehicle).toBe('MH14IO2030');
    });

    it('should return undefined if no active allocation found', () => {
        (getParkingAllocationBySlot as jest.Mock).mockReturnValue(undefined);

        const result = getActiveParkingAllocation('P1-S1');
        expect(result).toBeUndefined();
    });
});
