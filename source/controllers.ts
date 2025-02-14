import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load(); // Added this line to load data from contacts.json
  }

  processOptions(options: ContactsControllerOptions) {
    if (!options.action) return null;

    switch (options.action) {
      case "get":
        if (options.params.id) {
          return this.contacts.getOneById(options.params.id);
        }
        return this.contacts.getAll();
      
      case "save":
        if (options.params) {
          this.contacts.addOne(options.params);
          this.contacts.save();
          return true;
        }
        return false;
      
      default:
        return null;
    }
  }
}

export { ContactsController };
