import { v4 as uuid } from "uuid";
import { IPersona } from "./interfaces/IPersona";

class Persona implements IPersona {
  id: string;
  nombre: string;
  genero: string;
  origen: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  navesEspaciales: string[];

  constructor(
    id: string,
    nombre: string,
    genero: string,
    origen: string,
    peliculas?: string[],
    especies?: string[],
    vehiculos?: string[],
    navesEspaciales?: string[]
  ) {
    this.id = id || uuid();
    this.nombre = nombre;
    this.genero = genero;
    this.origen = origen;
    this.peliculas = peliculas || [];
    this.especies = especies || [];
    this.vehiculos = vehiculos || [];
    this.navesEspaciales = navesEspaciales || [];
  }
}

export { Persona };
