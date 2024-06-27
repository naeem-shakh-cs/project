import { validateVehicle } from './validators';

describe('validateVehicle', () => {
    it('should return true for valid vehicle', () => {
        expect(validateVehicle('MH14IO2030')).toBe(true);
    });

    it('should return false for invalid vehicle', () => {
        expect(validateVehicle('MH14')).toBe(false);
    });
});
