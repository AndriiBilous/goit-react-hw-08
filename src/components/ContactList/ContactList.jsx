import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '..//../redux/contactsSlice';

function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.container}>
            {contacts.map(item => {
                return (
                    <li key={item.id}>
                        <Contact items={item} />
                    </li>
                );
            })}
        </ul>
    );
}
export default ContactList;
