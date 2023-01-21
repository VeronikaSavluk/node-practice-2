import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectItems } from 'redux/contacts/selectors';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
    FormControl,
    Input,
    Button,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Box
} from '@chakra-ui/react';

const initialValues = {
    name: '',
    number: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

export function ContactForm() {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const handleSubmit = (values, { resetForm }) => {
        if (items.find(contact => contact.name === values.name)) {
            alert(`${values.name} is already in contacts`);
            return;
        };
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Flex direction='column'
            align='center'
            w={{ base: '280px', md: '300px' }} h={230} p={3}
            mb={{base:'15px', md: '0'}}
            border={2}
            borderColor='#FFFFF0'
            borderStyle='solid'
            borderRadius={10}
        >
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form >
                        <Field type='text' name='name' required>
                            {({ field, form }) => (
                                <FormControl mb={1} isInvalid={form.errors.name}>
                                    <Input {...field} autoComplete='off'
                                        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
                                        color='#FFFFF0'
                                        placeholder='Name'
                                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    />
                                    <Box h={34} w={255}>
                                        {form.values.name !== '' ? (
                                        <FormHelperText fontSize={7} color='#FFFFF0'>
                                            Name may contain only letters, apostrophe, dash and spaces.
                                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
                                        </FormHelperText>) : null}
                                        <FormErrorMessage fontSize={7} color='red'>
                                            Name is required
                                        </FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Field type='tel' name='number' required>
                            {({ field, form }) => (
                                <FormControl mb={1} isInvalid={form.errors.name}>
                                    <Input {...field} autoComplete='off'
                                        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
                                        color='#FFFFF0'
                                        inputMode='tel' placeholder='Number'
                                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    />
                                    <Box h={34} w={255}>
                                        {form.values.number !== '' ? (
                                        <FormHelperText fontSize={7} color='#FFFFF0'>
                                            Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
                                        </FormHelperText>) : null}
                                        <FormErrorMessage fontSize={7} color='red'>Number is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Button p={1} w={120}
                            fontSize='xs'
                            type='submit' name='Add contact'>
                            Add contact
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
};