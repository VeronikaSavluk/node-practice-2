import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts} from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import {
    ContactForm,
    FilterContactList,
    ContactList,
    Loader
} from 'components';
import Phonebook from '../images/phonebook.png'
import { Flex, Box, Center, Heading, Grid, Img } from '@chakra-ui/react';

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return <Flex direction='column' justifyContent='space-evenly'>
        <Flex align='flex-end' justifyContent='center'
            mt={{ base: '30px', md: '80px' }}
            mb={{ base: '10px', md: '30px' }}
        >
            <Img src={Phonebook} alt='' w='55px' h='55px' />
            <Heading as='h2' ml='10px'
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight='medium'
                textAlign='center' noOfLines={1}>
                Phonebook
            </Heading>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }}
            justifyContent='space-evenly' alignItems='flex-end'>
            <ContactForm />
            <Flex direction='column' w={{ base: '280px', md: '355px' }}
                align='stretch' border='2px solid' borderRadius='10px'
                borderColor='#FFFFF0' p='10px'
            >
                <Grid templateColumns={{ base: '1fr 1fr', md: '1rf 2fr' }}
                    justifyItems='end' alignItems='center'
                >
                    <Heading as='h3'
                        fontSize={{ base: 'lg', md: '2xl' }}
                        fontWeight='medium'
                        textAlign='center'
                        noOfLines={1}
                        justifySelf='start'>
                        Contacts
                    </Heading>
                    <FilterContactList />
                </Grid>
                <Center my={1} h='21px'>
                    {isLoading && !error && <Loader />}
                    {error && <Box>{error}</Box>}
                </Center>
                <ContactList />
            </Flex>
        </Flex>
    </Flex>
};

Contacts.propTypes = {
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string,
};

export default Contacts;