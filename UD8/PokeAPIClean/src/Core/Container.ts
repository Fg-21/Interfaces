import { Container } from "inversify";
import "reflect-metadata";
import { IPokemonsUseCase } from "../Domain/Interfaces/IPokemonsUseCase";
import { PokemonsUseCase } from "../Domain/UseCases/PokemonsUseCase";
import { PokemonsViewModel } from "../Presentation/PokemonsViewModel";
import { TYPES } from "./Types";
// import { RepoPokemons } from "../Data/Repos/RepoPokemons"; // Descomentar cuando esté implementado

const container = new Container();

// Bindings
container.bind<IPokemonsUseCase>(TYPES.IPokemonsUseCase).to(PokemonsUseCase);
// container.bind<IRepoPokemons>(TYPES.IRepoPokemons).to(RepoPokemons); // Descomentar cuando esté implementado
container.bind<PokemonsViewModel>(TYPES.PokemonsViewModel).to(PokemonsViewModel);

export { container };

