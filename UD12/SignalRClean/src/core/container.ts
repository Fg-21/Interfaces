import { Container } from "inversify"
import { IConnectionService } from "../domain/interfaces/IConnectionService"
import { IMensajeUsuarioUseCase } from "../domain/interfaces/IMensajeUsuarioUseCase"
import { MensajeUsuarioUseCase } from "../domain/usecases/mensajeUsuarioUseCase"
import { ConnectionService } from "../services/connectionService"
import { TYPES } from "./types"



const container = new Container()

container.bind<IConnectionService>(TYPES.IConnectionService).to(ConnectionService)
container.bind<IMensajeUsuarioUseCase>(TYPES.IMensajeUsuarioUseCase).to(MensajeUsuarioUseCase)

export { container }

