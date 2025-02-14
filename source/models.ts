// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  private contacts: Contact[] = [];

  load() {
    this.contacts = jsonfile.readFileSync(__dirname + "/contacts.json");
  }

  getAll(): Contact[] {
    return this.contacts;
  }

  addOne(contact: Contact) {
    this.contacts.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.contacts);
  }

  getOneById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }
}

export { ContactsCollection };
