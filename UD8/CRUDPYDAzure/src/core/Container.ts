import { Container } from 'inversify';
import 'reflect-metadata';
import RepoDepartamentos from '../data/repos/RepoDepartamentos';
import RepoPersonas from '../data/repos/RepoPersonas';
import DepartamentosUseCase from '../domain/usecases/DepartamentosUseCase';
import PersonasUseCase from '../domain/usecases/PersonasUseCase';
import DepartamentosVM from '../ui/vms/DepartamentosVM';
import PersonasVM from '../ui/vms/PersonasVM';

const container = new Container();

//repos
container.bind('IRepoDepartamentos').to(RepoDepartamentos).inSingletonScope();
container.bind('IRepoPersonas').to(RepoPersonas).inSingletonScope();

//use cases
container.bind('IDepartamentosUseCase').to(DepartamentosUseCase).inSingletonScope();
container.bind('IPersonasUseCase').to(PersonasUseCase).inSingletonScope();

//vms
container.bind('DepartamentosVM').to(DepartamentosVM).inSingletonScope();
container.bind('PersonasVM').to(PersonasVM).inSingletonScope();

export default container;
