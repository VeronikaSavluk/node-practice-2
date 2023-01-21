import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';
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
    email: '',
    password: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <Flex direction='column'
            align='center'
            w={280} h={310} p={3}
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
                    <Form>
                        <Field type='text' name='name' required>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name}>
                                    <Input {...field}
                                        autoComplete='off'
                                        color='#FFFFF0'
                                        placeholder='Name'
                                        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
                                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    />
                                    <Box h='34px' w={255}>
                                        {form.values.name !== '' ? (
                                        <FormHelperText color='#FFFFF0' fontSize={7}>
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
                        <Field type='email' name='email' required>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name}>
                                    <Input {...field}
                                        autoComplete='off'
                                        color='#FFFFF0'
                                        placeholder='Email'
                                        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    />
                                    <Box h='34px' w={255}>
                                        {form.values.email !== '' ? (
                                        <FormHelperText fontSize={7} color='#FFFFF0'>
                                            Email must be a valid email address
                                        </FormHelperText>) : null}
                                        <FormErrorMessage fontSize={7} color='red'>Email is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Field type='password' name='password' required>
                            {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name}>
                                    <Input {...field} autoComplete='off'
                                        placeholder='Password' color='#FFFFF0'
                                        _placeholder={{ opacity: 0.4, color: '#FFFFF0' }}
                                    />
                                        <Box h={34} w={255}>
                                            <FormErrorMessage fontSize={7} color='red'>Password is required</FormErrorMessage>
                                        </Box>
                                    </FormControl>
                                )
                            }
                        </Field>
                        <Button w={100} type='submit' name='Register'>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func,
};