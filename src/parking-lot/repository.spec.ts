import { getParkingSlotByName } from './repository';
import parkingLot from './data';

describe('getParkingSlotByName', () => {
    it('should return slot object if found', () => {
        const result = getParkingSlotByName('P2-S3');
        expect(result).toEqual({ name: 'P2-S3' });
    });

    it('should return null if slot not found', () => {
        const result = getParkingSlotByName('P4-S1');
        expect(result).toBeNull();
    });
});
