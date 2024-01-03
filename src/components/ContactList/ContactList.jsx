import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.wrapper}>
      {contacts.map((contact) => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={css.button} type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
 