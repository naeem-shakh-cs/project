import { ParkingAllocation } from '../parking-allocations/types';
import parkingLot, { Slot } from './data';

export function getFirstAvailableParkingSlot(currentParkingAllocations: ParkingAllocation[]): Slot | null {
    const allocatedSlots = new Set(currentParkingAllocations.map(allocation => allocation.slot));

    const firstAvailableSlot = parkingLot.floors.reduce((foundSlot: Slot | null, floor) => {
        if (foundSlot) {
            return foundSlot;
        }
        const availableSlot = floor.slots.find(slot => !allocatedSlots.has(slot.name));
        return availableSlot || null;
    }, null);

    return firstAvailableSlot;
}