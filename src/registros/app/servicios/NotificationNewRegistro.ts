import { Registration } from "../../domain/entidad/Registro";
import { NotificationNewRegistry } from "../../infraestructure/rabbitMQService/NotificacionAddRegistro";

export class NotificationRegistryUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewRegistry) {}

  async run(registration: Registration) {
    await this.serviceNotifiacion.sendNotification(registration);
  }
}