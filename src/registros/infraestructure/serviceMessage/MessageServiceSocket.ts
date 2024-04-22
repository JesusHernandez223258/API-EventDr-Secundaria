import io from 'socket.io-client';
import { Registration } from '../../domain/entidad/Registro';
import { IMessageService } from '../../app/servicios/IMessageService';

export class MessageServiceSocket implements IMessageService{
    sendMessage(registration: Registration): string {
        const socket = io('https://websocketserver-utr2.onrender.com');

        socket.on("connect", ()=>{
            console.log("Connected to server");
            
            socket.emit("newClient", "Cliente registrado");
            console.log("cliente agregado");
            
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });
        
        return "Message sent";
    }
}