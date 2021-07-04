import { ContactsComponent } from "./contacts.component"
import { Contact } from "./shared";

describe('contact component test cases' , () => {
    let contact : ContactsComponent = null;

    beforeEach(() => {
        contact = new ContactsComponent();
    })

    it('no contact shoud be there if no data is present' , () => {
        expect(contact.contacts.length).toBe(0);
    })

    it('contacts should be present in case of data' , () => {
        const contactData : Contact = {
            id: 1,
            name: 'John George'
        }
        contact.contacts.push(contactData);
        expect(contact.contacts.length).toBe(1);
    })
})