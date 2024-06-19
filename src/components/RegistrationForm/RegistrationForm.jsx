import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import css from './RegistrationForm.module.css';

const notify = () => toast.error('Before submit fill up the field, please.');

let ContactSchema = yup.object().shape({
    name: yup.string().required('Required').min(3, 'To short').max(50),
    email: yup.string().required('Required').min(3).max(50),
    password: yup.string().required('Required').min(3).max(50),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const handlerSubmit = (value, actions) => {
        if (value.name && value.email && value.password === '') {
            notify();
            return;
        }
        dispatch(register(value));
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={handlerSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.container}>
                <div className={css.wrap}>
                    <label name="name">User name</label>
                    <FaUser className={css.icons} />
                    <Field className={css.input} type="text" name="name" />
                    <ErrorMessage
                        className={css.error}
                        name="name"
                        component="span"
                    />
                </div>
                <div className={css.wrap}>
                    <label name="email">Email</label>
                    <MdEmail className={css.icons} />
                    <Field className={css.input} type="email" name="email" />
                    <ErrorMessage
                        className={css.error}
                        name="email"
                        component="span"
                    />
                </div>
                <div className={css.wrap}>
                    <label name="password">Password</label>
                    <TbPasswordUser className={css.icons} />
                    <Field className={css.input} type="text" name="password" />
                    <ErrorMessage
                        className={css.error}
                        name="password"
                        component="span"
                    />
                </div>
                <button type="submit" className={css.btn}>
                    Register
                </button>
                <Toaster position="top-center" reverseOrder={false} />
            </Form>
        </Formik>
    );
}
