import { StyleSheet } from 'react-native';
import { borderColor, white } from '../../assets/styles/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: white
    },
    itemContainer: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
    itemContainer2: {
        paddingTop: 10,
        paddingHorizontal: 10
    },
    divider: {
        alignSelf: 'flex-end',
        width: '82%',
        height: 1,
        marginBottom: 20,
        marginTop: 8,
        backgroundColor: borderColor
    }
})

export default styles;