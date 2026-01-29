import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { Departamento } from "../../domain/entities/Departamento";
import { IDepartamentosUseCase } from "../../domain/interfaces/IDepartamentosUseCase";

@injectable()
export default class DepartamentosVM {
    private _departamentosUseCase: IDepartamentosUseCase;

    // Observables
    departamentos: Departamento[] = [];
    departamentosFiltrados: Departamento[] = [];
    searchQuery: string = "";
    isLoading: boolean = false;
    error: string | null = null;
    
    // Modal de edición
    isModalVisible: boolean = false;
    selectedDepartamento: Departamento | null = null;
    editNombre: string = "";

    constructor(@inject("IDepartamentosUseCase") departamentosUseCase: IDepartamentosUseCase) {
        this._departamentosUseCase = departamentosUseCase;
        makeAutoObservable(this);
    }


    // Cargar todos los departamentos
    async loadDepartamentos(): Promise<void> {
        this.isLoading = true;
        this.error = null;

        try {
            const result = await this._departamentosUseCase.getDepartamentos();
            
            runInAction(() => {
                this.departamentos = result;
                this.filterDepartamentos();
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al cargar departamentos";
                this.isLoading = false;
            });
            console.error("Error loading departamentos:", error);
        }
    }


    // Establecer consulta de búsqueda
    setSearchQuery(query: string): void {
        this.searchQuery = query;
        this.filterDepartamentos();
    }

    // Filtrar departamentos según la búsqueda
    private filterDepartamentos(): void {
        if (!this.searchQuery.trim()) {
            this.departamentosFiltrados = this.departamentos;
        } else {
            const queryLower = this.searchQuery.toLowerCase().trim();
            this.departamentosFiltrados = this.departamentos.filter((departamento) =>
                departamento.nombre.toLowerCase().includes(queryLower)
            );
        }
    }

    // Limpiar búsqueda
    clearSearch(): void {
        this.searchQuery = "";
        this.filterDepartamentos();
    }


    // Abrir modal para crear nuevo departamento
    openCreateModal(): void {
        this.selectedDepartamento = null;
        this.editNombre = "";
        this.isModalVisible = true;
    }

    // Abrir modal para editar departamento existente
    openEditModal(departamento: Departamento): void {
        this.selectedDepartamento = departamento;
        this.editNombre = departamento.nombre;
        this.isModalVisible = true;
    }

    // Cerrar modal
    closeModal(): void {
        this.isModalVisible = false;
        this.selectedDepartamento = null;
        this.editNombre = "";
    }

    // Actualizar el nombre en el input del modal
    setEditNombre(nombre: string): void {
        this.editNombre = nombre;
    }


    // Guardar departamento (crear o editar)
    async saveDepartamento(): Promise<boolean> {
        if (!this.editNombre.trim()) {
            this.error = "El nombre no puede estar vacío";
            return false;
        }

        this.isLoading = true;
        this.error = null;

        try {
            const departamento = new Departamento(
                this.selectedDepartamento?.id || 0,
                this.editNombre.trim()
            );

            await this._departamentosUseCase.createOrEditDepartamento(departamento);

            runInAction(() => {
                this.isLoading = false;
                this.closeModal();
            });

            await this.loadDepartamentos();
            return true;
        } catch (error) {
            runInAction(() => {
                this.error = error instanceof Error ? error.message : "Error al guardar departamento";
                this.isLoading = false;
            });
            console.error("Error saving departamento:", error);
            return false;
        }
    }


    // Limpiar errores
    clearError(): void {
        this.error = null;
    }
}