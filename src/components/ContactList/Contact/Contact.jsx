import style from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
const Contact = ({ name, number, deleteContact}) => {
  return (
    <li className={style.contactItem}>
      <div>
        <div className={style.nameCont}>
          <FaUser size={16} />
          <p className={style.text}>{name}</p>
        </div>
        <div className={style.numberCont}>
          <FaPhoneAlt />
          <p className={style.text}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={style.deleteBtn}
        onClick={() => deleteContact(name)}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
