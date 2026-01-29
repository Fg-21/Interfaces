import * as signalR from "@microsoft/signalr";
import { injectable } from "inversify";
import { clsMensajeUsuario } from "../domain/entities/clsMensajeUsuario";
import { IConnectionService } from "../domain/interfaces/IConnectionService";
import { AzureBase } from "./azure/AzureBase";

@injectable()
export class ConnectionService implements IConnectionService {
  private connection: signalR.HubConnection | null = null;

  public async startConnection(): Promise<signalR.HubConnection> {
    const url = `${AzureBase.getURLBase()}chatHub`;
    
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    await this.connection.start();

    return this.connection;
  }

  public async send(mensaje: clsMensajeUsuario): Promise<void> {
    if (!this.connection) {
      throw new Error("Connection not established");
    }

    await this.connection.invoke("SendMessage", mensaje.nombre, mensaje.mensaje);
  }
}