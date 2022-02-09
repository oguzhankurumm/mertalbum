import { StyleSheet } from 'react-native';
import { lightGray, white } from '../../assets/styles/colors';
import { mediumText } from '../../assets/styles/fonts';

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
    },
    emptyContainer: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    emptyText: {
        fontSize: 18,
        color: lightGray,
        fontFamily: mediumText,
        textAlign: 'center'
    }
})

export default styles;