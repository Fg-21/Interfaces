import { Pokemon } from "../Entities/Pokemon";

export interface IPokemonsUseCase {
  getPokemons(): Promise<Pokemon[]>;
}