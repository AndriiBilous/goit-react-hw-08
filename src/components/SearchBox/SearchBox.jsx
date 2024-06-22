import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '..//../redux/filters/filtersSlice';
import { selectFilter } from '..//../redux/filters/selectors';
import css from './SearchBox.module.css';

function SearchBox() {
    const filters = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChange = value => {
        dispatch(filterItem(value));
    };
    return (
        <div className={css.container}>
            <p>Find contacts:</p>
            <input
                className={css.input}
                type="text"
                value={filters.trim()}
                onChange={event => handleChange(event.target.value)}
            />
        </div>
    );
}
export default SearchBox;
