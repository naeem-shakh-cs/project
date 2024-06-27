import { getFirstAvailableParkingSlot } from './service';
import { getParkingAllocationBySlot } from '../parking-allocations/repository';
import { Slot } from './data';

jest.mock('../parking-allocations/repository');
jest.mock('./data');

describe('getFirstAvailableParkingSlot', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return first available parking slot when one is available', () => {
        const mockCurrentAllocations = [];

        const mockParkingLot = {
            floors: [
                {
                    name: 'P1',
                    slots: [
                        { name: 'P1-S1' },
                        { name: 'P1-S2' },
                        { name: 'P1-S3' },
                        { name: 'P1-S4' }
                    ]
                },
                {
                    name: 'P2',
                    slots: [
                        { name: 'P2-S1' },
                        { name: 'P2-S2' },
                        { name: 'P2-S3' },
                        { name: 'P2-S4' }
                    ]
                }
            ]
        };

        (getParkingAllocationBySlot as jest.Mock).mockReturnValueOnce(undefined);

        (require('./data') as any).default = mockParkingLot;

        const result = getFirstAvailableParkingSlot(mockCurrentAllocations);

        expect(result).toEqual({ name: 'P1-S1' });
    });

    it('should return null when no slots are available', () => {
        const mockCurrentAllocations = [
            { slot: 'P1-S1', vehicle: 'Vehicle1', entry: '2024-06-26T12:00:00Z', exit: null },
            { slot: 'P1-S2', vehicle: 'Vehicle2', entry: '2024-06-26T12:00:00Z', exit: null }
        ];

        const mockParkingLot = {
            floors: [
                {
                    name: 'P1',
                    slots: [
                        { name: 'P1-S1' },
                        { name: 'P1-S2' }
                    ]
                }
            ]
        };

        (getParkingAllocationBySlot as jest.Mock).mockImplementation((slot: string) => {
            const allocation = mockCurrentAllocations.find(a => a.slot === slot);
            return allocation ? { ...allocation } : undefined;
        });

        (require('./data') as any).default = mockParkingLot;

        const result = getFirstAvailableParkingSlot(mockCurrentAllocations);

        expect(result).toBeNull();
    });
});
