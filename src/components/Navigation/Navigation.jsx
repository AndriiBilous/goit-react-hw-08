import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '..//../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const linkStyle = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <nav className={css.container}>
            <NavLink to="/" className={linkStyle}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={linkStyle}>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}
