import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
    Box,
    List,
    ListItem,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <Box overflowY='scroll' h={138} >
        <List color='#ea961b' fontSize={{ base: 'xs', md: 'sm' }}>
            {visibleContacts.map(({ _id, name, number }) => (
                    <ListItem key={_id}>
                    <Grid templateAreas={`'name number button'`}
                        templateColumns='repeat(5, 1fr)'
                        justifyItems='start' gap='1'>
                        <GridItem colSpan={2} area={'name'}>{name}:</GridItem>
                        <GridItem colSpan={2} pl='3px' justifySelf='end' area={'number'}>{number}</GridItem>
                        <GridItem colSpan={1} justifySelf='center' area={'button'}>
                            <Button w={{ base: '40px', md: '55px' }}
                                h={{ base: '14px', md: '18px' }} mb='2px' size='xs'
                                variant='outline'
                                type='submit' name='Delete'
                                onClick={() => dispatch(deleteContact(_id))}>
                                Delete
                            </Button>
                        </GridItem>
                    </Grid>
                </ListItem>
            ))}
            </List>
        </Box>
    );
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string,
        }),
    ),
};