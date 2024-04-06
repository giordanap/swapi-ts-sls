import Controller from "./controller";
import { Person } from "./models/person.class";
import { Persona } from "./models/persona.class";
import { getPeople } from "./functions/swapi";
import { TABLE } from "./constants/dydbTables";

class PersonController extends Controller {
  constructor() {
    super();
  }

  async getAllPerson() {
    const data = await getPeople();
    const peopleApi: Persona[] = await Promise.all(
      data.map(async (p: any) => {
        const person: Person = new Person(
          p.name,
          p.gender,
          p.homeworld,
          p.films,
          p.species,
          p.vehicles,
          p.starships
        );
        const persona: Persona = await person.convertirPersona();
        return persona;
      })
    );
    const result: any = await super.getAll(TABLE.TABLE);
    const personasApi: Persona[] = result.Items;
    const personas = [...personasApi, ...peopleApi];

    return personas;
  }

  async postPerson(event: any) {

    const requestBody = JSON.parse(event.body);

    const {
      nombre,
      genero,
      origen,
      peliculas,
      especies,
      vehiculos,
      navesEspaciales,
    } = requestBody;

    const newPersona: Persona = new Persona(
      nombre,
      genero,
      origen,
      peliculas,
      especies,
      vehiculos,
      navesEspaciales
    );

    await super.insert(TABLE.TABLE, newPersona);
  }
}

export default PersonController;
