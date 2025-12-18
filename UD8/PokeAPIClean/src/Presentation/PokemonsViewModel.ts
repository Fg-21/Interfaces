import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { TYPES } from "../Core/Types";
import { Pokemon } from "../Domain/Entities/Pokemon";
import { IPokemonsUseCase } from "../Domain/Interfaces/IPokemonsUseCase";

@injectable()
export class PokemonsViewModel {
  private pokemonsUseCase: IPokemonsUseCase;
  
  pokemons: Pokemon[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    @inject(TYPES.IPokemonsUseCase) pokemonsUseCase: IPokemonsUseCase
  ) {
    this.pokemonsUseCase = pokemonsUseCase;
    makeAutoObservable(this);
  }

  async loadPokemons(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    
    try {
      const newPokemons = await this.pokemonsUseCase.getPokemons();
      this.pokemons = [...this.pokemons, ...newPokemons];
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Error desconocido";
    } finally {
      this.isLoading = false;
    }
  }
}