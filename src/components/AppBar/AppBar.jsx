import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '..//../redux/auth/selectors';
import Menu from '../Menu/Menu';
import css from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.wrap}>
                    <Navigation />
                    {isLoggedIn ? <Menu /> : <AuthNav />}
                </div>
            </div>
        </header>
    );
}
