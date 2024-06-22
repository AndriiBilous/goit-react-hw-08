import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';
import ContactForm from '..//../components/ContactForm/ContactForm';
import SearchBox from '..//../components/SearchBox/SearchBox';
import ContactList from '..//../components/ContactList/ContactList';
import css from './ContactsPage.module.css';
import ContactModal from '../../components/ContactModal/ContactModal';
import { useState } from 'react';
import { deleteContact } from '..//../redux/contacts/operations';
import { fetchContacts } from '..//../redux/contacts/operations';
import EditModal from '../../components/EditModal/EditModal';
import { selectLoading, selectError } from '..//../redux/contacts/selectors';

const notify = () => toast.success('You delete a contact');
const notifyError = () => toast.error('No name error.');

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    //=====================ConformModal=================================
    const [contactId, setContactId] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal(id) {
        setContactId(id);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function toDelete() {
        dispatch(deleteContact(contactId))
            .unwrap()
            .then(() => {
                notify();
            })
            .catch(() => {
                notifyError();
            });
        setIsOpen(false);
    }

    //=====================EditModal=================================
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [editId, setEditId] = useState('');

    function editModalOpen() {
        setModalEditIsOpen(true);
    }
    function editModalIsClose() {
        setModalEditIsOpen(false);
    }
    function afterEditOpenModal(id) {
        setEditId(id);
    }

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <h2 className={css.title}>Add a new contact</h2>
            <ContactForm />
            <SearchBox />
            {isLoading && (
                <Bars
                    height="40"
                    width="40"
                    color="blue"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass={css.loading}
                    visible={true}
                />
            )}
            {isError && <p className={css.loading}>Error message!!!</p>}
            <ContactList
                afterOpenModal={afterOpenModal}
                afterEditOpenModal={afterEditOpenModal}
                openModal={openModal}
                modalOpen={editModalOpen}
            />
            {modalIsOpen && (
                <ContactModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    toDelete={toDelete}
                />
            )}
            {modalEditIsOpen && (
                <EditModal
                    editModalIsClose={editModalIsClose}
                    modalEditIsOpen={modalEditIsOpen}
                    contactId={editId}
                />
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
