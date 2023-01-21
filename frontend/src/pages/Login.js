import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import {LoginForm} from 'components';
import { Flex, Box, Heading, Text} from '@chakra-ui/react';

const Login = () => {
    const error = useSelector(selectError);

    return <Flex direction='column' align='center'>
        <Heading as='h2' mt={20} mb={30}
            fontSize="3xl" fontWeight='medium'
            textAlign='center' noOfLines={1}>
            Log in
        </Heading>
        <LoginForm />
        <Box mt={10} h={30}>
            {error === 'Login error'
                && (<Text fontSize='md'>{error}</Text>
            )}
        </Box>
    </Flex>
};

Login.propTypes = {
    error: PropTypes.string,
};

export default Login;