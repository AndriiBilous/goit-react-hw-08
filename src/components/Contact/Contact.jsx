import { useDispatch } from 'react-redux';
import { AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { deleteContact } from '..//../redux/contactsOps';

function Contact({ items: { id, name, number } }) {
    const dispatch = useDispatch();

    //======================Delete========================================
    const onDelete = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <p className={css.text}>
                    <FaUser />
                    {name}
                </p>
                <p className={css.text}>
                    <AiFillPhone />
                    {number}
                </p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
export default Contact;
