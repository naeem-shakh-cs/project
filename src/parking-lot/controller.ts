import { Request, Response } from 'express';
import { getActiveParkingAllocation } from '../parking-allocations/service';
import { getParkingSlotByName } from './repository';

export async function getParkingSlot(req: Request, res: Response): Promise<Response> {
    let slot = getParkingSlotByName(req.params.slot)
    if (!slot) {
        return res.status(404).send('not found')
    }
    const pa = getActiveParkingAllocation(req.params.slot as string)
    const parkingSlotAvailability = { ...slot, available: !!pa ? false : true }
    return res.status(200).send(parkingSlotAvailability);
}