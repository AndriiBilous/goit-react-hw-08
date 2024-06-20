import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { patchContact } from '../../redux/contacts/contactsOps';
import toast, { Toaster } from 'react-hot-toast';
import css from './EditForm.module.css';

const notify = () => toast.success('You edit a contact');

let ContactSchema = yup.object().shape({
    name: yup.string().required('Required').min(3, 'To short').max(50),
    number: yup
        .string()
        .required('Required')
        .matches('[0-9]{3}-[0-9]{2}-[0-9]{2}', 'Wrong format'),
});

export default function EditForm({ editModalIsClose, contactId }) {
    const dispatch = useDispatch();
    //======================AddContact========================================
    const handelEdit = (value, actions) => {
        if (value !== '') {
            notify();
            dispatch(patchContact({ contactId, value }));
            editModalIsClose();
        }

        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handelEdit}
            validationSchema={ContactSchema}
        >
            <Form>
                <div>
                    <label name="name">Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage
                        className={css.error}
                        name="name"
                        component="span"
                    />
                </div>
                <div>
                    <label name="number">Number</label>
                    <Field
                        name="number"
                        type="tel"
                        placeholder="xxx-xx-xx"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    />
                    <ErrorMessage
                        className={css.error}
                        name="number"
                        component="span"
                    />
                </div>
                <button type="submit">Save</button>
                <Toaster position="top-center" reverseOrder={false} />
            </Form>
        </Formik>
    );
}
