import LoginForm from '..//../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { selectLoading } from '..//../redux/auth/selectors';
import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export default function LoginPage() {
    const isLoading = useSelector(selectLoading);

    return (
        <div className={css.container}>
            <h1 className={css.title}>Please log in</h1>
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
            <LoginForm />
        </div>
    );
}
