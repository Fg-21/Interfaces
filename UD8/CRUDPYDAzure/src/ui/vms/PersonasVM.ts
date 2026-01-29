import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { PersonaWithListaDepaDto } from "../../domain/dtos/PersonaWithListaDepaDto";
import { Departamento } from "../../domain/entities/Departamento";
import { Persona } from "../../domain/entities/Persona";
import { IPersonasUseCase } from "../../domain/interfaces/IPersonasUseCase";

@injectable()
export default class PersonasVM {
    private _personasUseCase: IPersonasUseCase;

    // Observables - Lista
    personas: Persona[] = [];
    personasFiltradas: Persona[] = [];
    searchQuery: string = "";
    isLoading: boolean = false;
    error: string | null = null;

    // Observables - Formulario de edición/creación
    isEditMode: boolean = false;
    personaWithDepa: PersonaWithListaDepaDto | null = null;
    
    // Campos del formulario
    formId: number = 0;
    formNombre: string = "";
    formApellidos: string = "";
    formTelefono: string = "";
    formDireccion: string = "";
    formFoto: string = "";
    formFecha: string = "";
    formIdDepartamento: number = 0;

    // Validaciones
    formErrors: {
        nombre?: string;
        apellidos?: string;
        telefono?: string;
        direccion?: string;
        fecha?: string;
        departamento?: string;
    } = {};

    constructor(@inject("IPersonasUseCase") personasUseCase: IPersonasUseCase) {
        this._personasUseCase = personasUseCase;
        makeAutoObservable(this);
    }

    // Cargar todas las personas
    async loadPersonas(): Promise<void> {
        this.isLoading = true;
        this.error = null;

        try {
            const result = await this._personasUseCase.getPersonas();
            
            runInAction(() => {
                this.personas = result;
                this.filterPersonas();
                this.isLoading = false;
            });
            console.log("VM:" + result);
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al cargar personas";
                this.isLoading = false;
            });
            console.error("Error loading personas:", error);
        }
        
    }

    // Establecer consulta de búsqueda
    setSearchQuery(query: string): void {
        this.searchQuery = query;
        this.filterPersonas();
    }

    // Filtrar personas según la búsqueda
    private filterPersonas(): void {
        if (!this.searchQuery.trim()) {
            this.personasFiltradas = this.personas;
        } else {
            const queryLower = this.searchQuery.toLowerCase().trim();
            this.personasFiltradas = this.personas.filter((persona) => {
                const nombreCompleto = `${persona.nombre} ${persona.apellido}`.toLowerCase();
                return nombreCompleto.includes(queryLower) ||
                       persona.nombre.toLowerCase().includes(queryLower) ||
                       persona.apellido.toLowerCase().includes(queryLower);
            });
        }
    }

    // Limpiar búsqueda
    clearSearch(): void {
        this.searchQuery = "";
        this.filterPersonas();
    }


    // Navegar a crear nueva persona
    async navigateToCreate(): Promise<void> {
        this.isEditMode = false;
        this.isLoading = true;
        this.error = null;

        try {
            const personas = await this._personasUseCase.getPersonas();
            
            if (personas.length > 0) {
                const dtoConDepartamentos = await this._personasUseCase.getPersonaWithListaDepaById(personas[0].id);
                
                runInAction(() => {
                    this.personaWithDepa = dtoConDepartamentos;
                    this.resetForm();
                    this.isLoading = false;
                });
            } else {
                runInAction(() => {
                    this.personaWithDepa = null;
                    this.resetForm();
                    this.isLoading = false;
                    this.error = "No hay departamentos disponibles. Cree un departamento primero.";
                });
            }
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al cargar departamentos";
                this.isLoading = false;
            });
            console.error("Error loading departamentos for create:", error);
        }
    }

    // Navegar a editar persona existente
    async navigateToEdit(personaId: number): Promise<void> {
        this.isEditMode = true;
        this.isLoading = true;
        this.error = null;

        try {
            const result = await this._personasUseCase.getPersonaWithListaDepaById(personaId);
            
            runInAction(() => {
                this.personaWithDepa = result;
                this.populateForm(result);
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al cargar persona";
                this.isLoading = false;
            });
            console.error("Error loading persona for edit:", error);
        }
    }


    // Poblar formulario con datos de persona existente
    private populateForm(personaDto: PersonaWithListaDepaDto): void {
        this.formId = personaDto.id;
        this.formNombre = personaDto.nombre;
        this.formApellidos = personaDto.apellidos;
        this.formTelefono = personaDto.telefono;
        this.formDireccion = personaDto.direccion;
        this.formFoto = personaDto.foto;
        this.formFecha = personaDto.fecha;
        this.formIdDepartamento = personaDto.idDepartamento;
        this.formErrors = {};
    }

    // Resetear formulario (para modo crear)
    resetForm(): void {
        this.formId = 0;
        this.formNombre = "";
        this.formApellidos = "";
        this.formTelefono = "";
        this.formDireccion = "";
        this.formFoto = "";
        this.formFecha = "";
        this.formIdDepartamento = 0;
        this.formErrors = {};
    }

    // Setters para los campos del formulario
    setFormNombre(value: string): void {
        this.formNombre = value;
        if (this.formErrors.nombre) delete this.formErrors.nombre;
    }

    setFormApellidos(value: string): void {
        this.formApellidos = value;
        if (this.formErrors.apellidos) delete this.formErrors.apellidos;
    }

    setFormTelefono(value: string): void {
        this.formTelefono = value;
        if (this.formErrors.telefono) delete this.formErrors.telefono;
    }

    setFormDireccion(value: string): void {
        this.formDireccion = value;
        if (this.formErrors.direccion) delete this.formErrors.direccion;
    }

    setFormFoto(value: string): void {
        this.formFoto = value;
    }

    setFormFecha(value: string): void {
        this.formFecha = value;
        if (this.formErrors.fecha) delete this.formErrors.fecha;
    }

    setFormIdDepartamento(value: number): void {
        this.formIdDepartamento = value;
        if (this.formErrors.departamento) delete this.formErrors.departamento;
    }


    // Validar formulario
    validateForm(): boolean {
        const errors: typeof this.formErrors = {};

        if (!this.formNombre.trim()) {
            errors.nombre = "El nombre es requerido";
        }

        if (!this.formApellidos.trim()) {
            errors.apellidos = "Los apellidos son requeridos";
        }

        if (!this.formTelefono.trim()) {
            errors.telefono = "El teléfono es requerido";
        }

        if (!this.formDireccion.trim()) {
            errors.direccion = "La dirección es requerida";
        }

        if (!this.formFecha.trim()) {
            errors.fecha = "La fecha de nacimiento es requerida";
        } else if (!this._personasUseCase.checkFechaTo18(this.formFecha)) {
            errors.fecha = "La persona debe ser mayor de 18 años";
        }

        if (this.formIdDepartamento <= 0) {
            errors.departamento = "Debe seleccionar un departamento";
        }

        this.formErrors = errors;
        return Object.keys(errors).length === 0;
    }

    // Verificar si la fecha es domingo
    isFechaSunday(): boolean {
        if (!this.formFecha) return false;
        return this._personasUseCase.checkFechaToSundays(this.formFecha);
    }

    // Verificar si es mayor de edad
    isMayorDeEdad(): boolean {
        if (!this.formFecha) return false;
        return this._personasUseCase.checkFechaTo18(this.formFecha);
    }


    // Guardar persona (crear o editar)
    async savePersona(): Promise<boolean> {
        if (!this.validateForm()) {
            return false;
        }

        this.isLoading = true;
        this.error = null;

        try {
            const persona = new Persona(
                this.formId,
                this.formNombre.trim(),
                this.formApellidos.trim(),
                this.formTelefono.trim(),
                this.formDireccion.trim(),
                this.formFoto.trim(),
                this.formFecha,
                this.formIdDepartamento
            );

            await this._personasUseCase.createOrEditPersona(persona);

            runInAction(() => {
                this.isLoading = false;
            });

            await this.loadPersonas();
            return true;
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al guardar persona";
                this.isLoading = false;
            });
            console.error("Error saving persona:", error);
            return false;
        }
    }


    // Eliminar persona
    async deletePersona(id: number): Promise<boolean> {
        this.isLoading = true;
        this.error = null;

        try {
            await this._personasUseCase.deletePersona(id);

            runInAction(() => {
                this.isLoading = false;
            });

            await this.loadPersonas();
            return true;
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al eliminar persona";
                this.isLoading = false;
            });
            console.error("Error deleting persona:", error);
            return false;
        }
    }


    // Obtener lista de departamentos disponibles
    get departamentosDisponibles(): Departamento[] {
        return this.personaWithDepa?.listaDepa || [];
    }

    // Limpiar errores
    clearError(): void {
        this.error = null;
    }

    // Limpiar errores del formulario
    clearFormErrors(): void {
        this.formErrors = {};
    }
}