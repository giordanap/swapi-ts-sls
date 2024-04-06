import { v4 as uuid } from "uuid";
import { Persona } from "./persona.class";
import { getValue } from "../functions/swapi"; // Asumiendo que esto es ahora un export de ES6
import { IPerson } from "./interfaces/IPerson";

class Person implements IPerson {
  id: string;
  name: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];

  constructor(
    name: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[]
  ) {
    this.id = uuid();
    this.name = name;
    this.gender = gender;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
  }

  async convertirPersona(): Promise<Persona> {
    return new Persona(
      this.id,
      this.name,
      this.getGender(this.gender),
      await getValue(this.homeworld, "name"),
      await this.getArray(this.films, "title"),
      await this.getArray(this.species, "name"),
      await this.getArray(this.vehicles, "name"),
      await this.getArray(this.starships, "name")
    );
  }

  async getArray(arr: string[], field: string): Promise<string[]> {
    const values: string[] = await Promise.all(
      arr.map(async (e) => {
        if (typeof e === 'string') {
          return getValue(e, field);
        } else {
          throw new Error('Elemento no válido en el arreglo');
        }
      })
    );
    return values;
  }
  

  getGender(gender: string): string {
    if (gender === "male") return "masculino";
    else if (gender === "female") return "femenino";
    else return gender;
  }
}

export { Person };
