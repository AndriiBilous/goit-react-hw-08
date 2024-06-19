import Modal from 'react-modal';
import { IoMdCloseCircle } from 'react-icons/io';
import css from './ContactModal.module.css';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: 'none',
        overflow: 'visible',
    },
};
Modal.setAppElement('#root');

const ContactModal = ({ modalIsOpen, closeModal, toDelete }) => {
    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Contact Modal"
        >
            <div className={css.container}>
                <button
                    className={css.btnImage}
                    type="button"
                    onClick={closeModal}
                >
                    <IoMdCloseCircle />
                </button>
                <h2 className={css.title}>
                    Do you want to delete this contact?
                </h2>
                <div className={css.wrap}>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={toDelete}
                    >
                        Yes
                    </button>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={closeModal}
                    >
                        No
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default ContactModal;
