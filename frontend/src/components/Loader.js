import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Vortex
            visible={true}
            height='15'
            width='15'
            colors={['#fcf75e', '#ffc40c', '#e08d3c', '#fffacd', '#a99a86', '#c9c0bb']}
        />
    );
};