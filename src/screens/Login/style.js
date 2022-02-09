import { StyleSheet } from 'react-native';
import { black, darkGray, lightGray, ultraDark, white } from '../../assets/styles/colors';
import { boldText, mediumText } from '../../assets/styles/fonts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: white
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    topContainer: {
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        textAlign: 'left',
        fontSize: 22,
        fontFamily: boldText,
        color: black,
        marginBottom: 5
    },
    subTitle: {
        textAlign: 'left',
        fontFamily: mediumText,
        color: lightGray,
        fontSize: 14,
    },
    input: {
        width: '100%'
    },
    inputItem: {
        marginTop: 20,
        borderColor: '#E1E1E1',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    forgot: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: mediumText,
        color: ultraDark,
        marginBottom: 5
    },
    remember: {
        textAlign: 'right',
        fontSize: 16,
        fontFamily: mediumText,
        color: ultraDark,
        marginBottom: 5
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    switch: {
        marginLeft: 10
    }
})

export default styles;