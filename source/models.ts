import fs from 'fs';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];

  load() {
    const data = fs.readFileSync('contacts.json', 'utf-8');
    this.contacts = JSON.parse(data);
  }

  getAll() {
    return this.contacts;
  }

  getOneById(id: number): Contact | null {
    const contact = this.contacts.find(contact => contact.id === id);
    return contact || null;
  }

  addOne(contact: Contact) {
  // Buscar el id máximo actual
  const maxId = this.contacts.reduce((max, c) => c.id > max ? c.id : max, 0);
  // Asignar id nuevo +1
  contact.id = maxId + 1;
  this.contacts.push(contact);
  this.save();
}


  save() {
    const data = JSON.stringify(this.contacts, null, 2);
    fs.writeFileSync('contacts.json', data, 'utf-8');
  }
}

export { ContactsCollection };
