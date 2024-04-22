import { CreateRegistryController } from "../controllers/addRegistroController";
import { CreateRegistryUseCase } from "../../app/usesCases/addRegistroUseCase";
import { NotificationRegistryUSeCase } from "../../app/servicios/NotificationNewRegistro";
import { NotificationNewRegistry } from "../rabbitMQService/NotificacionAddRegistro";
import { MessageServiceSocket } from "../serviceMessage/MessageServiceSocket";
import { MySqlRegistryRepository } from "../repositorios/mySQLRegistroRepository";

export const mySqlRegistryRepository = new MySqlRegistryRepository();
export const servicesNotification = new NotificationNewRegistry();
export const messageServiceSocket = new MessageServiceSocket();
export const serviceNotificationUseCase = new NotificationRegistryUSeCase(servicesNotification);
export const createRegistryUseCase = new CreateRegistryUseCase(mySqlRegistryRepository, serviceNotificationUseCase, messageServiceSocket);
export const createRegistryController = new CreateRegistryController(createRegistryUseCase);