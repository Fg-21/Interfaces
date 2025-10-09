import { RepoPersona } from "../models/data/repoPersona";
import { Persona } from "../models/entities/Persona";

export class IndexVM {
  getPersonas(): Persona[] {
    return RepoPersona.getPersonas()
  }
}
