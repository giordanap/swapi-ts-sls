import PersonController from "../controllers/people.controller";
import { Persona } from "../controllers/models/persona.class";

const personController = new PersonController();

/**
 * @swagger
 * tags:
 *   name: People
 *   description: CRUD Personas
 */

/**
 * @swagger
 * /people:
 *   get:
 *     summary: Get all people
 *     description: Retrieve a list of all people
 *     responses:
 *       '200':
 *         description: A JSON array of people
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Persona'
 */
export const getPeople = async (): Promise<any> => {
  try {
    const people: Persona[] = await personController.getAllPerson();
    return {
      statusCode: 200,
      body: JSON.stringify(people)
    };
  } catch (error) {
    console.error("Error al obtener personas:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" })
    };
  }
};

/**
 * @swagger
 * /people:
 *   post:
 *     summary: Add a new person
 *     description: Add a new person to the list
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       '200':
 *         description: Successfully added a new person
 *       '500':
 *         description: Internal server error
 */
export const addPerson = async (event: any) => {
  try {
    await personController.postPerson(event);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Persona añadida exitosamente" })
    };
  } catch (error) {
    console.error("Error al agregar persona:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" })
    };
  }
};

