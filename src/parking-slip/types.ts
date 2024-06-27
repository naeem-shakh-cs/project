import { ParkingAllocation } from "../parking-allocations/types"

export type ParkingSlip = ParkingAllocation & {
    parkingFloor: string,
    duration: Number, // minutes
    charge: Number,  // hours * 10
}

// problem statement
// deallocate parking slot, generate & store parking slip 
// and return parking slip
// validations & handle error scenarios

