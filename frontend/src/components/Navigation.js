import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Breadcrumb fontWeight='bold' fontSize='xl' separator=' '>
        <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to='/' isCurrentPage>
            Home
            </BreadcrumbLink>
        </BreadcrumbItem>
        {isLoggedIn && <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to='/login'>
            Contacts
            </BreadcrumbLink>
        </BreadcrumbItem>}
        </Breadcrumb>
    );
};

Navigation.propTypes = {
    isLoggedIn: PropTypes.string,
};