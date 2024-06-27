import parkingLot from "./data";
import { Slot } from "./data";

export function getParkingSlotByName(slotName: string): Slot|null {
    let data: any = null
    parkingLot.floors.map((floor) => {
        const matchingSlot = floor.slots.find((slot) => {
            return slot.name === slotName;
        })
        if (!!matchingSlot) {
            data = matchingSlot
        }
    })
    return data || null
}