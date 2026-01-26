import { Container } from "inversify"
import RepoDepartamentos from "../data/repos/RepoDepartamentos"
import RepoPersonas from "../data/repos/RepoPersonas"
import { IDepartamentosUseCase } from "../domain/interfaces/IDepartamentosUseCase"
import { IPersonasUseCase } from "../domain/interfaces/IPersonasUseCase"
import { IRepoDepartamentos } from "../domain/interfaces/IRepoDepartamento"
import { IRepoPersonas } from "../domain/interfaces/IRepoPersonas"
import DepartamentosUseCase from "../domain/usecases/DepartamentosUseCase"
import PersonasUseCase from "../domain/usecases/PersonasUseCase"
import { TYPES } from "./Types"


const container = new Container()

container.bind<IRepoDepartamentos>(TYPES.IRepoDepartamentos).to(RepoDepartamentos)
container.bind<IRepoPersonas>(TYPES.IRepoPersonas).to(RepoPersonas)
container.bind<IPersonasUseCase>(TYPES.IPersonasUseCase).to(PersonasUseCase)
container.bind<IDepartamentosUseCase>(TYPES.IDepartamentosUseCase).to(DepartamentosUseCase)