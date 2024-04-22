import express from "express";

import { createRegistryController } from "../dependencias/dependencies";

export const registrationRouter = express.Router();

registrationRouter.post("/", createRegistryController.run.bind(createRegistryController));