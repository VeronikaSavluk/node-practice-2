import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from 'theme/foundations';
import { Container, Button, Input } from 'theme/components';
import { styles } from './styles';

const theme = {
    styles,
    breakpoints,
    components: {
        Button,
        Container,
        Input,
    },
};

export default extendTheme(theme);