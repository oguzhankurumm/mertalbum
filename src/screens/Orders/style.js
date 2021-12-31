import { StyleSheet } from 'react-native';
import { background, white } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: white
    },
    flatlist: {
        width: '100%',
        padding: 10
    }
})

export default styles;