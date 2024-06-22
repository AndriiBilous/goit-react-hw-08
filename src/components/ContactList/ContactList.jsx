import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '..//../redux/contacts/contactsSlice';

function ContactList({
    modalOpen,
    openModal,
    afterOpenModal,
    afterEditOpenModal,
}) {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.container}>
            {contacts.map(item => {
                return (
                    <li key={item.id}>
                        <Contact
                            afterEditOpenModal={afterEditOpenModal}
                            modalOpen={modalOpen}
                            afterOpenModal={afterOpenModal}
                            openModal={openModal}
                            items={item}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
export default ContactList;
