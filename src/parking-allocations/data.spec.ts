import parkingAllocations from './data';

describe('parkingAllocations data', () => {
    it('should be an array', () => {
        expect(Array.isArray(parkingAllocations)).toBe(true);
    });

    it('should initially contain parking allocations', () => {
        expect(parkingAllocations.length).toBeGreaterThan(0);
    });
});
