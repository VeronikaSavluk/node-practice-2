import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {AppBar} from 'components';
import { Container } from '@chakra-ui/react';

export const Layout = () => {

    return (
        <Container border='none' px={{base: '20px', md: '30px'}}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    );
};