export type Slot = {
  name: string
}

export type Floor = {
  name: string,
  slots: Slot[]
}

export type ParkingLot = {
  floors: Floor[]
}

const parkingLot: ParkingLot = {
  floors: [
    {
      name: 'P1',
      slots: [
        {
          name: 'P1-S1'
        },
        {
          name: 'P1-S2'
        },
        {
          name: 'P1-S3'
        },
        {
          name: 'P1-S4'
        },
      ],
    },
    {
      name: 'P2',
      slots: [
        {
          name: 'P2-S1'
        },
        {
          name: 'P2-S2'
        },
        {
          name: 'P2-S3'
        },
        {
          name: 'P2-S4'
        },
      ],
    },
    {
      name: 'P3',
      slots: [
        {
          name: 'P3-S1'
        },
        {
          name: 'P3-S2'
        },
        {
          name: 'P3-S3'
        },
        {
          name: 'P3-S4'
        },
      ],
    },
  ],
};

export default parkingLot