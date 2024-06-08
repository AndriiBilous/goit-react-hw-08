import { useSelector, useDispatch } from 'react-redux';
import { filterItem, selectFilter } from '..//../redux/filtersSlice';

function SearchBox() {
    const filters = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChange = value => {
        dispatch(filterItem(value));
    };
    return (
        <div>
            <p>Find contacts:</p>
            <input
                type="text"
                value={filters.trim()}
                onChange={event => handleChange(event.target.value)}
            />
        </div>
    );
}
export default SearchBox;
