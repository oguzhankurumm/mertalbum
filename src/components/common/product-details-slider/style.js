import { StyleSheet } from "react-native";
import { white } from "../../../assets/styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 300
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dotStyle: {
        width: 10,
        height: 10,
        backgroundColor: white
    },
    renderItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    paginationContainer: {
        position: 'absolute',
        bottom: -10,
    }

})

export default styles;