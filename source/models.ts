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
    this.contacts.push(contact);
    this.save();
  }

  save() {
    const data = JSON.stringify(this.contacts, null, 2);
    fs.writeFileSync('contacts.json', data, 'utf-8');
  }
}

export { ContactsCollection };
