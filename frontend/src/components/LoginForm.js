import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {logIn} from 'redux/auth/operations';
import {
    FormControl,
    Input,
    Button,
    Flex
} from '@chakra-ui/react';

const initialValues = {
    email: '',
    password: ''
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    };

    return (
        <Flex direction='column'
            align='center'
            w={280} h={170} p={3}
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
                        <Field type='email' name='email' required>
                            {({ field, form }) => (
                                    <FormControl w='250px'>
                                    <Input {...field}
                                        autoComplete='off'
                                        _placeholder={{
                                            opacity: 0.4,
                                            color: '#FFFFF0'
                                        }}
                                        placeholder='Email'
                                        color='#FFFFF0'
                                    />
                                    </FormControl>
                                )
                            }
                        </Field>
                        <Field type='password' name='password' required>
                            {({ field, form }) => (
                                <FormControl w='250px'>
                                    <Input {...field}
                                        autoComplete='off'
                                        _placeholder={{
                                            opacity: 0.4,
                                            color: '#FFFFF0' }}
                                        placeholder='Password'
                                        color='#FFFFF0'
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Button p={2} my={5}
                            w={100} fontSize='sm'
                            fontWeight='bold'
                            type='submit' name='Log in'>Log in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    field: PropTypes.object,
    form: PropTypes.object,
};