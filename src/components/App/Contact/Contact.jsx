import css from './Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactBox}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
