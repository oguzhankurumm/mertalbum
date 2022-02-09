import { StyleSheet } from 'react-native';
import { background, borderColor, lightGray, ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        backgroundColor: background
    },
    imageStyle: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 8
    },
    subContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: white,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    modelsTitleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginVertical: 10
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: boldText,
        color: ultraDark
    },
    title: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontSize: 24,
        fontFamily: boldText,
        color: ultraDark
    },
    description: {
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        fontFamily: mediumText,
        color: lightGray
    },
    modelsContainer: {
        width: '100%',
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default styles;