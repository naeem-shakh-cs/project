import express from 'express';
import { postParkingAllocation } from './controller';
import { pathParamValidator } from '../lib/middlewares/validation-middleware';
import { validateVehicle } from './validators';

var router = express.Router();

router.post("/:vehicle", pathParamValidator({vehicle: validateVehicle}), postParkingAllocation)

export default router;