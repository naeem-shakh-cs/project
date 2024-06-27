import {getParkingAllocationBySlot} from './repository'
import { ParkingAllocation } from './types';

export function getActiveParkingAllocation(slot: string):ParkingAllocation|null {
    const pa = getParkingAllocationBySlot(slot)
    if(pa?.exit){
        return null;
    }
    return pa as ParkingAllocation;
}