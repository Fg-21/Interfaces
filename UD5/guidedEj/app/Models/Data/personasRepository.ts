import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";


export interface IRepositoryPersonas {
     getListadoCompletoPersonas(): Persona[];
}


@injectable()
export class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
        ];
    }
}

@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas{
    getListadoCompletoPersonas(): Persona[] {
        return [];
    }

}

@injectable()
export class PersonasRepository100 implements IRepositoryPersonas{
    getListadoCompletoPersonas(): Persona[] {
        return [
    new Persona(1, 'Fernando', 'Galiana Fernández'),
    new Persona(2, 'Carlos', 'Martínez López'),
    new Persona(3, 'Ana', 'Rodríguez Pérez'),
    new Persona(4, 'Miguel', 'Sánchez Ruiz'),
    new Persona(5, 'Laura', 'Torres Díaz'),
    new Persona(6, 'David', 'Moreno García'),
    new Persona(7, 'Lucía', 'González Muñoz'),
    new Persona(8, 'Javier', 'Hernández Romero'),
    new Persona(9, 'Sofía', 'Gómez Navarro'),
    new Persona(10, 'Manuel', 'Ruiz Ortega'),
    new Persona(11, 'María', 'Díaz Serrano'),
    new Persona(12, 'Antonio', 'Álvarez Márquez'),
    new Persona(13, 'Carmen', 'Jiménez Torres'),
    new Persona(14, 'José', 'Morales Vargas'),
    new Persona(15, 'Elena', 'Ramírez Rubio'),
    new Persona(16, 'Luis', 'Ortega Herrera'),
    new Persona(17, 'Sara', 'Castro Molina'),
    new Persona(18, 'Pablo', 'Suárez Medina'),
    new Persona(19, 'Raquel', 'Blanco Domínguez'),
    new Persona(20, 'Andrés', 'Reyes Iglesias'),
    new Persona(21, 'Beatriz', 'Cano Vázquez'),
    new Persona(22, 'Álvaro', 'Silva León'),
    new Persona(23, 'Claudia', 'Serrano Cortés'),
    new Persona(24, 'Daniel', 'Peña Lorenzo'),
    new Persona(25, 'Isabel', 'Delgado Núñez'),
    new Persona(26, 'Rubén', 'Marín Rojas'),
    new Persona(27, 'Patricia', 'Santos Guerrero'),
    new Persona(28, 'Sergio', 'Hidalgo Campos'),
    new Persona(29, 'Eva', 'Vicente Castro'),
    new Persona(30, 'Hugo', 'Romero Álvarez'),
    new Persona(31, 'Nuria', 'López Fernández'),
    new Persona(32, 'Francisco', 'García López'),
    new Persona(33, 'Silvia', 'Pérez González'),
    new Persona(34, 'Diego', 'Martínez Sánchez'),
    new Persona(35, 'Rosa', 'Ruiz Gómez'),
    new Persona(36, 'Adrián', 'Moreno Díaz'),
    new Persona(37, 'Alicia', 'González Ruiz'),
    new Persona(38, 'Iván', 'Sánchez Martínez'),
    new Persona(39, 'Marta', 'Fernández Jiménez'),
    new Persona(40, 'Jorge', 'López Romero'),
    new Persona(41, 'Julia', 'Pérez García'),
    new Persona(42, 'Ángela', 'Gómez López'),
    new Persona(43, 'Pedro', 'Muñoz Rodríguez'),
    new Persona(44, 'Teresa', 'Díaz Martínez'),
    new Persona(45, 'Víctor', 'Rodríguez Sánchez'),
    new Persona(46, 'Natalia', 'Romero Fernández'),
    new Persona(47, 'Marcos', 'Hernández González'),
    new Persona(48, 'Irene', 'Martínez Pérez'),
    new Persona(49, 'Óscar', 'López Díaz'),
    new Persona(50, 'Cristina', 'García Morales'),
    new Persona(51, 'Raúl', 'Ortega Ruiz'),
    new Persona(52, 'Lorena', 'Fernández Herrera'),
    new Persona(53, 'Alberto', 'Serrano Torres'),
    new Persona(54, 'Verónica', 'Blanco Medina'),
    new Persona(55, 'Tomás', 'Gómez Navarro'),
    new Persona(56, 'Sonia', 'Díaz Marín'),
    new Persona(57, 'Eduardo', 'Moreno Rubio'),
    new Persona(58, 'Ainhoa', 'Pérez Lorenzo'),
    new Persona(59, 'Gustavo', 'Martínez Cortés'),
    new Persona(60, 'Nerea', 'Rodríguez León'),
    new Persona(61, 'Emilio', 'Suárez Hidalgo'),
    new Persona(62, 'Paula', 'Romero Guerrero'),
    new Persona(63, 'Matías', 'López Núñez'),
    new Persona(64, 'Yolanda', 'Ruiz Iglesias'),
    new Persona(65, 'Alejandro', 'García Ramírez'),
    new Persona(66, 'Belén', 'Sánchez Peña'),
    new Persona(67, 'Samuel', 'Pérez Cabrera'),
    new Persona(68, 'Noelia', 'Martínez Santana'),
    new Persona(69, 'Guillermo', 'Gómez Reyes'),
    new Persona(70, 'Esther', 'Díaz Guerrero'),
    new Persona(71, 'Enrique', 'Serrano Ortega'),
    new Persona(72, 'Mónica', 'Ruiz Campos'),
    new Persona(73, 'Félix', 'Morales Medina'),
    new Persona(74, 'Iris', 'Hernández Rojas'),
    new Persona(75, 'Óscar', 'López Vicente'),
    new Persona(76, 'Alba', 'Martínez Lorenzo'),
    new Persona(77, 'Benjamín', 'González Cano'),
    new Persona(78, 'Sandra', 'Rodríguez Silva'),
    new Persona(79, 'Arturo', 'Fernández Ramírez'),
    new Persona(80, 'Pilar', 'Pérez Blanco'),
    new Persona(81, 'Jaime', 'Sánchez Herrera'),
    new Persona(82, 'Clara', 'Díaz Rubio'),
    new Persona(83, 'Héctor', 'García Marín'),
    new Persona(84, 'Eva', 'Muñoz Domínguez'),
    new Persona(85, 'Sebastián', 'Álvarez Campos'),
    new Persona(86, 'Andrea', 'Ortega León'),
    new Persona(87, 'Bruno', 'Martínez Cabrera'),
    new Persona(88, 'Miriam', 'Gómez Medina'),
    new Persona(89, 'Raúl', 'Serrano Pérez'),
    new Persona(90, 'Rocío', 'Rodríguez Guerrero'),
    new Persona(91, 'Mario', 'Fernández Ruiz'),
    new Persona(92, 'Elsa', 'Moreno Núñez'),
    new Persona(93, 'Iván', 'Pérez Hidalgo'),
    new Persona(94, 'Celia', 'González Martínez'),
    new Persona(95, 'Abel', 'Sánchez Gómez'),
    new Persona(96, 'Lidia', 'Ramírez Lorenzo'),
    new Persona(97, 'Gonzalo', 'López Ortega'),
    new Persona(98, 'Natalia', 'Ruiz Serrano'),
    new Persona(99, 'Álex', 'Martínez Campos'),
    new Persona(100, 'Inés', 'García Blanco'),
];

    }
    
}