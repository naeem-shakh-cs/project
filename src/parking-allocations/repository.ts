import parkingAllocations from "./data";
import { ParkingAllocation } from "./types";

export function getParkingAllocationBySlot(slot: string): ParkingAllocation|undefined {
    return parkingAllocations.find((pa) => {
        return pa.slot === slot && pa.exit === null;
    })
}