import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection; // Definimos el tipo correctamente

  constructor() {
    this.contacts = new ContactsCollection(); // Instanciamos ContactsCollection
    this.contacts.load(); // Llamamos al método load
  }

  pprocessOptions(options: ContactsControllerOptions) {
  if (options.action === "get") {
    if (options.params.id) {
      // Si hay un id, buscamos un contacto específico
      return this.contacts.getOneById(options.params.id);
    } else {
      // Si no hay id, devolvemos todos los contactos
      return this.contacts.getAll();
    }
  } else if (options.action === "save") {
    // Si la acción es "save", agregamos un nuevo contacto
    this.contacts.addOne(options.params);
    this.contacts.save(); // No olvides guardar los cambios
    return { message: "Contacto agregado exitosamente." };
  }

  return { message: "Acción no válida." };
}
}

export { ContactsController };
