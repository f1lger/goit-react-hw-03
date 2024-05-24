import style from "./ContactList.module.css";
import Contact from "./Contact/Contact.jsx";

export default function ContactList({ userList, deleteContact }) {
  return (
    <ul className={style.contactList}>
      {userList.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
