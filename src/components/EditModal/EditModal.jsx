import Modal from 'react-modal';
import { IoMdCloseCircle } from 'react-icons/io';
import css from './EditModal.module.css';
import EditForm from '../EditForm/EditForm';

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

const EditModal = ({ editModalIsClose, modalEditIsOpen, contactId }) => {
    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={modalEditIsOpen}
            onRequestClose={editModalIsClose}
            style={customStyles}
            contentLabel="Edit Modal"
        >
            <div>
                <button
                    // className={css.btnImage}
                    type="button"
                    onClick={editModalIsClose}
                >
                    <IoMdCloseCircle />
                </button>
                <h2>Edit contact</h2>
                <EditForm
                    editModalIsClose={editModalIsClose}
                    contactId={contactId}
                />
            </div>
        </Modal>
    );
};

export default EditModal;
