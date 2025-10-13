import { RepoPersona } from "../models/data/repoPersona";
import { Persona } from "../models/entities/Persona";

export class IndexVM {
  public static get Personas(): Persona[] {
    return RepoPersona.getPersonas()
  }
}
