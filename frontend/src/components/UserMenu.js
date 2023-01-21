import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {selectUserName} from '../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
console.log(name)
    return (
        <Flex direction={{ base: 'column', md: 'row' }}
            align='center'
            justify='space-between'
        >
            <Text fontSize={{ base: '7px', md: 'xs' }}
                mb={{ base: '10px', md: 0 }} mr={{ md: '15px' }}
                textAlign='center' noOfLines={2}
                w={{ base: '100px', md: '200px' }}>
                Welcome to your phonebook, {name}!
            </Text>
            <Button
                fontSize='sm' fontWeight='bold'
                w='80px' h={30} variant='outline'
                onClick={() => dispatch(logOut())}>
                Log out
            </Button>
        </Flex>
    );
};

UserMenu.propTypes = {
    onClick: PropTypes.func,
};