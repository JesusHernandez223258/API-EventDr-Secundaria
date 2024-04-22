import { Registration } from "../entidad/Registro";

export default interface INotificationNewRegistry {
    sendNotification(registration: Registration):Promise<boolean>;
}