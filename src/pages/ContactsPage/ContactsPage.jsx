import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from '..//../components/ContactForm/ContactForm';
import SearchBox from '..//../components/SearchBox/SearchBox';
import ContactList from '..//../components/ContactList/ContactList';
import css from './ContactsPage.module.css';
import ContactModal from '../../components/ContactModal/ContactModal';
import { useState } from 'react';
import { deleteContact } from '..//../redux/contacts/contactsOps';
import { fetchContacts } from '..//../redux/contacts/contactsOps';
// import EditContactModal from '../../components/EditContactModal/EditContactModal';

const notify = () => toast.success('You delete a contact');

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.loading);
    const isError = useSelector(state => state.contacts.error);
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
        notify();
        dispatch(deleteContact(contactId));
        setIsOpen(false);
    }
    //=====================EditModal=================================
    // const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    // function editModalOpen() {
    //     setModalEditIsOpen(true);
    // }
    // function editModalIsClose() {
    //     setModalEditIsOpen(false);
    // }

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <p className={css.loading}>Loading message...</p>}
            {isError && <p className={css.loading}>Error message!!!</p>}
            <ContactList
                afterOpenModal={afterOpenModal}
                openModal={openModal}
                // modalOpen={editModalOpen}
            />
            {modalIsOpen && (
                <ContactModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    toDelete={toDelete}
                />
            )}

            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

// {modalEditIsOpen && (
//     <EditContactModal
//         editModalIsClose={editModalIsClose}
//         modalEditIsOpen={modalEditIsOpen}
//     />
// )}
