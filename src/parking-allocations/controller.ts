import { Request, Response } from 'express';
import parkingAllocations from './data';
import { getFirstAvailableParkingSlot } from '../parking-lot/service';

export async function postParkingAllocation(req: Request, res: Response): Promise<Response> {
    const vehicle = req.params.vehicle as string;

    const availableParkingSlot = getFirstAvailableParkingSlot(parkingAllocations);
    if(!availableParkingSlot){
        return res.status(422).send('Parking lot is full')
    }
    const parkingAllocation = {
        slot: availableParkingSlot.name,
        vehicle,
        entry: Date.now().toString(),
        exit: null
    }
    parkingAllocations.push(parkingAllocation)
    return res.status(201).send(parkingAllocation)
}