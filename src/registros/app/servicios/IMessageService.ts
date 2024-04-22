import { Registration } from "../../domain/entidad/Registro";

export interface IMessageService {
    sendMessage(registration: Registration):string;
}