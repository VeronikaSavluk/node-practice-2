import PropTypes from 'prop-types';
import ThemeImage from '../images/phonebook.png';
import { Flex, Heading, Img } from '@chakra-ui/react';

const Home = () => {
    return <Flex direction='column' align='center'>
        <Heading as='h1' mt={10} fontSize={{ base: '4xl', md: '7xl' }} textAlign='center' noOfLines={2} >Create your own phonebook</Heading>
        <Img w={{base: '270px', md: '500px'}} objectFit='contain' src={ThemeImage} alt=''/>
    </Flex>
};

Home.propTypes = {
    ThemeImage: PropTypes.string,
};

export default Home;