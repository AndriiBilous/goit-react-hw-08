import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '..//../redux/auth/operations';
import { selectRefreshing } from '..//../redux/auth/selectors';
import RestrictedRout from '../RestrictedRout';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('..//../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
    import('..//../pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('..//../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
    import('..//../pages/ContactsPage/ContactsPage'),
);

function App() {
    const dispatch = useDispatch();

    const isRefreshing = useSelector(selectRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    // if (isRefreshing) {
    //     return null;
    // }
    return (
        <Layout>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRout
                                component={<RegistrationPage />}
                                redirectTo="/"
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRout
                                component={<LoginPage />}
                                redirectTo="/contacts"
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                component={<ContactsPage />}
                                redirectTo="/login"
                            />
                        }
                    />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;
