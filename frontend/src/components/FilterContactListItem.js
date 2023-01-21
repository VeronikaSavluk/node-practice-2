import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

export const FilterContactList = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(setFilter(form.value.toLowerCase()));
    };

    return <Input color='#FFFFF0'
        placeholder='Find contacts by name'
        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
        fontSize={{base:'xs', md: 'sm'}}
        type='text'
        name='value'
        onChange={handleChange}
    />
};

FilterContactList.propTypes = {
    handleChange: PropTypes.func,
    QueryInputId: PropTypes.func,
};