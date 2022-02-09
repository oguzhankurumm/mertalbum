import { StyleSheet } from 'react-native';
import { white } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: white
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    input: {
        width: '100%'
    },
    inputItem: {
        marginTop: 20,
        borderColor: '#E1E1E1',
    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;