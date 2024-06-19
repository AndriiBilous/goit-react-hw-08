import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

export default function AuthNav() {
    const linkStyle = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <div className={css.container}>
            <NavLink to="/register" className={linkStyle}>
                Register
            </NavLink>
            <NavLink to="/login" className={linkStyle}>
                Log In
            </NavLink>
        </div>
    );
}
