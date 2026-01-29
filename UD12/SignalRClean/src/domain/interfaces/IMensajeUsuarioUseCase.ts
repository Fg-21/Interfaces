import * as signalR from '@microsoft/signalr';
import { clsMensajeUsuario } from "../entities/clsMensajeUsuario";
export interface IMensajeUsuarioUseCase {
    send(mensaje: clsMensajeUsuario): Promise<void>;
    startConnection(): Promise<signalR.HubConnection>;
}