import { AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

function Contact({
    items: { id, name, number },
    modalOpen,
    openModal,
    afterOpenModal,
}) {
    const handlerClick = () => {
        openModal();
        afterOpenModal(id);
    };
    const handlerEditContact = () => {
        modalOpen();
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
            <button type="button" onClick={handlerEditContact}>
                Edit
            </button>
            <button type="button" onClick={handlerClick}>
                Delete
            </button>
        </div>
    );
}
export default Contact;
