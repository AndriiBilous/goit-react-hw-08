import { AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';

function Contact({
    items: { id, name, number },
    modalOpen,
    openModal,
    afterOpenModal,
    afterEditOpenModal,
}) {
    const handlerClick = () => {
        openModal();
        afterOpenModal(id);
    };
    const handlerEditContact = () => {
        modalOpen();
        afterEditOpenModal(id);
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
            <div className={css.wrapBtn}>
                <button
                    type="button"
                    className={css.btn}
                    onClick={handlerEditContact}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className={css.btn}
                    onClick={handlerClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
export default Contact;
