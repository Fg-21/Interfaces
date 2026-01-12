import { inject } from "inversify";
import PersonaTrimmedYListaDepartamentosDtoYColor from "../models/PersonaTrimmed&ListaDepartamentosDto&Color";
import { TYPES } from "@/src/core/types";
import IPersonaDepartamentoUseCase from "@/src/domain/interfaces/IPersonaDepartamentoUseCase";
import PersonaTrimmedYListaDepartamentosDto from "@/src/domain/dtos/PersonaTrimmedYListaDepartamentosDto";
import PersonaTrimmedYListaDepartamentosDtoYColorMapper from "../mappers/PersonaTrimmed&ListaDepartamentosDtoToPersonaTrimmed&ListaDepartamentosDto&ColorMapper";
import { injectable } from "inversify";

@injectable()
export default class PDGameVM{
    public isLoading: boolean = false;
    public dataCompleted: PersonaTrimmedYListaDepartamentosDtoYColor[] = []
    public error: string = "";
    public aciertos: number = 0;
    public registros: number = 0;
    public allRegistersGuessed: boolean = false;

    /**
     * @param PersonasDepartamentosUseCase inyección del caso de uso al view model 
     */
    constructor(
        @inject(TYPES.IPersonaDepartamentoUseCase)
        private PersonasDepartamentosUseCase: IPersonaDepartamentoUseCase
    ){}

    /**
     * Metodo para cargar la lista de los dto y mapearla al modelo de vista para ofrecerselo a la misma 
     */
    public async loadList(): Promise<void>{
        this.isLoading = true;
        this.error = "";
        this.dataCompleted = [];

        try{
            const data = await this.PersonasDepartamentosUseCase.getListaPersonasConListaDepartamento()
            if (!Array.isArray(data)){
                throw new Error("Error al cargar los datos de la API en el VM: Data esta vacío")
            }

            for(const item of data){
                const itemWithColor = PersonaTrimmedYListaDepartamentosDtoYColorMapper.execute(item);
                this.dataCompleted.push(itemWithColor);
            }

            this.registros = this.dataCompleted.length;
            
        }catch(error){
            if (error instanceof Error){
                this.error = error.message;
            } else{
                this.error = "Error al contactar con Azure"
            }
            console.error("Error in PDGame loadList() method:", error)
        }
    }

    /**
     * Metodo para chequear que el usuario ha acertado todos los registros y cambiar su booleano correspondiente a true si es así
     */
    public checkRegisters(): void {
    this.allRegistersGuessed = (this.aciertos === this.registros);
    }
}