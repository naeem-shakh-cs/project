import bodyParser from 'body-parser';
import express, {
  Application,
  Request,
  Response,
} from 'express';
import { getParkingSlot } from './parking-lot/controller';
import parkingAllocationRouter from './parking-allocations/routes';

const app: Application = express();

app.get("/health", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "OK",
  });
});

app.get("/parking-slot/:slot", getParkingSlot)
app.use("/parking-allocation", parkingAllocationRouter)

app.use(bodyParser.json());


const PORT = 3000;

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}

export default app;