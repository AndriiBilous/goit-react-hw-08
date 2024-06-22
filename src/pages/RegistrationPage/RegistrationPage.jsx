import RegistrationForm from '..//../components/RegistrationForm/RegistrationForm';
import css from './RegistrationForm.module.css';
import { selectLoading } from '..//../redux/auth/selectors';
import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export default function RegistrationPage() {
    const isLoading = useSelector(selectLoading);
    return (
        <div>
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
            <h2 className={css.title}>Registration</h2>
            <RegistrationForm />
        </div>
    );
}
