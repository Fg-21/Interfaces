import Persona from "../entities/Persona";

export default interface IRepoPersonas{
    getAllPersonas(): Promise<Persona[]>;
}