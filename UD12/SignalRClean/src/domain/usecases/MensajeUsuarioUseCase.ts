import { TYPES } from '@/src/core/types';
import * as signalR from '@microsoft/signalr';
import { inject, injectable } from 'inversify';
import { clsMensajeUsuario } from '../entities/clsMensajeUsuario';
import { IConnectionService } from '../interfaces/IConnectionService';
import { IMensajeUsuarioUseCase } from '../interfaces/IMensajeUsuarioUseCase';

@injectable()
export class MensajeUsuarioUseCase implements IMensajeUsuarioUseCase {
    

    constructor(@inject(TYPES.IConnectionService)
       private servicio: IConnectionService) {
       
    }

    public send(mensaje: clsMensajeUsuario): void {
    }

    public startConnection(): signalR.HubConnection {
        return this.servicio.startConnection()
    }
}