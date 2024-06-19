import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '..//../redux/auth/operations';
import css from './Menu.module.css';

export default function Menu() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUser);
    const handlerClick = () => {
        dispatch(logOut());
    };
    return (
        <div className={css.container}>
            <p>Welcome {userName.name}</p>
            <button className={css.btn} type="button" onClick={handlerClick}>
                Log out
            </button>
        </div>
    );
}
