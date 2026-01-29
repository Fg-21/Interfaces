import * as signalR from '@microsoft/signalr';
import { clsMensajeUsuario } from "../entities/clsMensajeUsuario";
export interface IConnectionService {
    send(mensaje: clsMensajeUsuario): Promise<void>;
    startConnection(): Promise<signalR.HubConnection>;
}