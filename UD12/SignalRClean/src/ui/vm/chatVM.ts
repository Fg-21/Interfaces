import { TYPES } from '@/src/core/types';
import { IMensajeUsuarioUseCase } from '@/src/domain/interfaces/IMensajeUsuarioUseCase';
import * as signalR from '@microsoft/signalr';
import { inject } from 'inversify';
import { clsMensajeUsuario } from '../../domain/entities/clsMensajeUsuario';

export class chatVM {    
    private connection: signalR.HubConnection; 
    public message: clsMensajeUsuario;
    public listaMsg: clsMensajeUsuario[];
    public isLoading: boolean;

    constructor(@inject(TYPES.IMensajeUsuarioUseCase) private useCase: IMensajeUsuarioUseCase) {
        this.message = new clsMensajeUsuario("", "");
        this.listaMsg = [];
        this.isLoading = false;
    }

    public send(mensaje: clsMensajeUsuario): void {
        this.useCase.send(mensaje)
    }

    public startConnection(): void {
        this.connection = this.useCase.startConnection()
        

    }
}