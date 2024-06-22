import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import { MdEmail } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import * as yup from 'yup';
import css from './LoginForm.module.css';

let ContactSchema = yup.object().shape({
    email: yup.string().required('Required').min(3, 'To short').max(50),
    password: yup.string().required('Required').min(8, 'To short'),
});
const notifyError = () => toast.error('Invalid email or password,  try again');

export default function LoginForm() {
    const dispatch = useDispatch();
    const handlerSubmit = (value, actions) => {
        dispatch(logIn(value))
            .unwrap()
            .then(() => {
                actions.resetForm();
            })
            .catch(() => {
                notifyError();
            });
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handlerSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.container}>
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
                    <Field
                        className={css.input}
                        type="password"
                        name="password"
                    />
                    <ErrorMessage
                        className={css.error}
                        name="password"
                        component="span"
                    />
                </div>
                <button type="submit" className={css.btn}>
                    Log in
                </button>
                <Toaster position="top-center" reverseOrder={false} />
            </Form>
        </Formik>
    );
}
