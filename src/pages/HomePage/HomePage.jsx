import RandomText from '../../components/RandomText/RandomText';
import css from './HomePage.module.css';
export default function HomePage() {
    return (
        <div>
            <h1 className={css.title}>Home Page</h1>
            <RandomText />
        </div>
    );
}
