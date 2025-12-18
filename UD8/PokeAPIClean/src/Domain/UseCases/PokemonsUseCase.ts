
import { inject, injectable } from "inversify";
import { TYPES } from "../../Core/Types";
import { Pokemon } from "../Entities/Pokemon";
import { IPokemonsUseCase } from "../Interfaces/IPokemonsUseCase";
import { IRepoPokemons } from "../Interfaces/IRepoPokemons";

@injectable()
export class PokemonsUseCase implements IPokemonsUseCase {
  private repoPokemons: IRepoPokemons;

  constructor(
    @inject(TYPES.IRepoPokemons) repoPokemons: IRepoPokemons
  ) {
    this.repoPokemons = repoPokemons;
  }

  async getPokemons(): Promise<Pokemon[]> {
    return await this.repoPokemons.getPokemons();
  }
}