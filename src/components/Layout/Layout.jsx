import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
export default function Layout({ children }) {
    return (
        <>
            <AppBar />
            <main>
                <section className={css.base}>
                    <div className={css.container}>{children}</div>
                </section>
            </main>
        </>
    );
}
