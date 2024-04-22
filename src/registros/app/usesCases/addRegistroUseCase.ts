import { Registration } from "../../domain/entidad/Registro";
import { RegistrationRepository } from "../../domain/interfaz/RegistroRepository";
import { NotificationRegistryUSeCase } from "../servicios/NotificationNewRegistro";
import { MessageServiceSocket } from "../../infraestructure/serviceMessage/MessageServiceSocket";

export class CreateRegistryUseCase {
    constructor( readonly registrationRepository: RegistrationRepository, readonly sendNotification: NotificationRegistryUSeCase, 
        readonly messageServiceSocket: MessageServiceSocket) {}

    async run(
        id_venta: number,
    ): Promise<Registration | null> {
        try {
            console.log("log en el useCase",id_venta);
            
            const registry: any = await this.registrationRepository.createRegistry(
                id_venta
            );
            if(registry) {
                this.sendNotification.run(registry);
                this.messageServiceSocket.sendMessage(registry);
            }
            return registry;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}