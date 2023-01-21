import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation, UserMenu, AuthNav } from 'components';
import { Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Flex as='header' align='center'>
            <Navigation />
            <Spacer />
            {isLoggedIn
                ? <UserMenu />
                : <AuthNav />}
        </Flex>
    );
};