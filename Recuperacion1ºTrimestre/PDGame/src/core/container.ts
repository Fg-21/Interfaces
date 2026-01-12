import {Container} from "inversify"
import IRepoDepartamentos from "../domain/interfaces/IRepoDepartamentos"
import { TYPES } from "./types"
import RepoDepartamentos from "../data/repos/RepoDepartamentos"
import RepoPersonas from "../data/repos/RepoPersonas"
import IRepoPersonas from "../domain/interfaces/IRepoPersonas"
import PersonaDepartamentoUseCase from "../domain/useCases/PersonaDepartamentoUseCase"
import IPersonaDepartamentoUseCase from "../domain/interfaces/IPersonaDepartamentoUseCase"
import PDGameVM from "../app/vms/PDGameVM"

const container = new Container()

container.bind<IRepoDepartamentos>(TYPES.IRepoDepartamentos).to(RepoDepartamentos)
container.bind<IRepoPersonas>(TYPES.IRepoPersonas).to(RepoPersonas)
container.bind<IPersonaDepartamentoUseCase>(TYPES.IPersonaDepartamentoUseCase).to(PersonaDepartamentoUseCase)
container.bind<PDGameVM>(PDGameVM).toSelf().inSingletonScope();

export { container }