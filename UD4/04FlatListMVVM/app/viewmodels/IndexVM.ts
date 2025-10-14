import { RepoPersona } from "../models/data/repoPersona";
import { Persona } from "../models/entities/Persona";

export class IndexVM {
  private _listaPersona : Persona[];
  private _personaSeleccionada : Persona | null = null;

  constructor() {
    this._listaPersona = RepoPersona.getPersonas();
    this._personaSeleccionada = null
  }

  public get listaPersona(){
    return this._listaPersona
  }

  public set personaSeleccionada(persona: Persona){
    this._personaSeleccionada = persona;
    this.alerta(this._personaSeleccionada)
  }

  public alerta(persona: Persona){
    alert("ID: " + persona.Id)
  }
}
