import { TYPES } from "@/app/CORE/types";
import { Persona } from "@/app/DOMAIN/Entities/Persona";
import { IPersonasUseCase } from "@/app/DOMAIN/Interfaces/IPersonasUseCase";
import { inject } from "inversify";
import {  makeAutoObservable } from "mobx";


export class PersonasVM{
    public _listaPersonas: Persona[] = [];
    private _personaSelected: Persona;

    constructor(@inject(TYPES.IPersonasUseCase) private PersonasUseCase: IPersonasUseCase){
        this._listaPersonas = PersonasUseCase.getPersonas();
        this._personaSelected = new Persona()
        makeAutoObservable(this);
    }

    public get ListaPersonas(){
        return this._listaPersonas
    }

    public get PersonaSelected(){
        return this._personaSelected
    }

    public set PersonaSelected(value: Persona){
        this._personaSelected = value
        alert("Persona seleccionada ha cambiado a " + value.nombre)
    }
}