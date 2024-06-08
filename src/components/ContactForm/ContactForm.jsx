import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '..//../redux/contactsOps';

let ContactSchema = yup.object().shape({
    name: yup.string().required('Required').min(3, 'To short').max(50),
    number: yup
        .string()
        .required('Required')
        .matches('[0-9]{3}-[0-9]{2}-[0-9]{2}', 'Wrong format'),
});
function ContactForm() {
    const dispatch = useDispatch();
    //======================AddContact========================================
    const handelAdd = value => {
        dispatch(addContact(value));
    };
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={(value, actions) => {
                handelAdd({ ...value });
                actions.resetForm();
            }}
            validationSchema={ContactSchema}
        >
            <Form className={css.container}>
                <div className={css.wrap}>
                    <label name="name">Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage
                        className={css.error}
                        name="name"
                        component="span"
                    />
                </div>
                <div className={css.wrap}>
                    <label name="number">Number</label>
                    <Field
                        type="tel"
                        name="number"
                        placeholder="xxx-xx-xx"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    />
                    <ErrorMessage
                        className={css.error}
                        name="number"
                        component="span"
                    />
                </div>

                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
export default ContactForm;
