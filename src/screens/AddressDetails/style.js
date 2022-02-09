import { StyleSheet } from 'react-native';
import { white } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: white
    },
    input: {
        width: '100%'
    },
    inputItem: {
        marginTop: 20,
        borderColor: '#E1E1E1',
    },
})

export default styles;