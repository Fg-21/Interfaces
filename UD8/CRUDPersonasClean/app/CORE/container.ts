import { Container } from "inversify";
import "reflect-metadata";

import { IRepoPersonas } from "../DOMAIN/Interfaces/IRepoPersonas";
import { IPersonasUseCase } from "../DOMAIN/Interfaces/IPersonasUseCase";
import { RepoPersona } from "../DATA/Repos/RepoPersonas";
import { PersonaUseCase } from "../DOMAIN/UseCases/PersonaUseCase";
import { TYPES } from "./types";
import { PersonasVM } from "../UI/ViewModels/PersonasVM";

const container = new Container()

container.bind<IRepoPersonas>(TYPES.IReposPersonas).to(RepoPersona)
container.bind<IPersonasUseCase>(TYPES.IPersonasUseCase).to(PersonaUseCase)
container.bind<PersonasVM>(TYPES.PersonasVM).to(PersonasVM)

export {container};