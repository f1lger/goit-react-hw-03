import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.module.css";

const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [filter, setFilter] = useState("");

  const [contact, setContact] = useState(
    () => JSON.parse(localStorage.getItem("saved-contacts")) ?? contactList
  );

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contact));
  }, [contact]);

  const updateContact = (valueContact) => {
    setContact((prev) => [...prev, valueContact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = (contactToDelete) =>
    setContact((prev) => prev.filter(({ name }) => name !== contactToDelete));

  const filteredContacts = contact.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm updateContact={updateContact} />
      <SearchBox filter={filter} filterChange={handleFilterChange} />
      <ContactList
        userList={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
