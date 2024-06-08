import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '..//../redux/contactsOps';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import '..//../index.module.css';
import css from './App.module.css';

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.loading);
    const isError = useSelector(state => state.contacts.error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <p>Loading message</p>}
            {isError && <p>Error message</p>}
            <ContactList />
        </div>
    );
}

export default App;
