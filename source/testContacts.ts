import { ContactsCollection } from "./models";

const contacts = new ContactsCollection();

// Cargar datos
contacts.load();
console.log("Todos los contactos:", contacts.getAll());

// Buscar por id
const contacto = contacts.getOneById(1);
console.log("Contacto con id 1:", contacto);
// Agregar un contacto nuevo
contacts.addOne({ id: 3, name: "Nuevo Contacto" });
console.log("Después de agregar:", contacts.getAll());

// Agregar contactos nuevos
contacts.addOne({ id: 0, name: "Contacto 1" });
contacts.addOne({ id: 0, name: "Contacto 2" });
console.log("Después de agregar nuevos contactos:", contacts.getAll());
