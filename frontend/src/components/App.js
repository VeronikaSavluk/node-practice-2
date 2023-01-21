import PropTypes from 'prop-types';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Layout, Loader, RestrictedRoute, PrivateRoute } from 'components';
import { VStack } from '@chakra-ui/react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <VStack>
      {isRefreshing
        ? <Loader />
        : <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/register'
              element={<RestrictedRoute redirectTo='/contacts'
                component={<RegisterPage />} />}
            />
            <Route path='/login'
              element={<RestrictedRoute redirectTo='/contacts'
                component={<LoginPage />} />}
            />
            <Route path='/contacts'
              element={<PrivateRoute redirectTo='/login'
                component={<ContactsPage />} />}
            />
          </Route>
        </Routes>}
    </VStack>
  );
};

App.propTypes = {
  isRefreshing: PropTypes.bool,
};