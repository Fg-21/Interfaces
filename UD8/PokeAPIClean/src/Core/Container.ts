import { Container } from "inversify";
import "reflect-metadata";
import { RepoPokemons } from "../Data/Repos/RepoPokemons";
import { IPokemonsUseCase } from "../Domain/Interfaces/IPokemonsUseCase";
import { IRepoPokemons } from "../Domain/Interfaces/IRepoPokemons";
import { PokemonsUseCase } from "../Domain/UseCases/PokemonsUseCase";
import { PokemonsViewModel } from "../Presentation/PokemonsViewModel";
import { TYPES } from "./Types";

const container = new Container();

// Bindings
container.bind<IPokemonsUseCase>(TYPES.IPokemonsUseCase).to(PokemonsUseCase);
container.bind<IRepoPokemons>(TYPES.IRepoPokemons).to(RepoPokemons);
container.bind<PokemonsViewModel>(TYPES.PokemonsViewModel).to(PokemonsViewModel);

export { container };

