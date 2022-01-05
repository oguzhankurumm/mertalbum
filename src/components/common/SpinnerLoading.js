import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { primary } from '../../assets/styles/colors';
import { ActivityIndicator } from 'react-native-paper';

const { width, height } = Dimensions.get("window");
const SpinnerLoading = (props) => {
    const Loading = props.Loading;

    return (
        <Modal
            isVisible={Loading}
            useNativeDriverForBackdrop
            style={styles.modalStyle}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0.5}
        >
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#FFF',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size={50} animating={true} color={primary} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalStyle: {
        justifyContent: 'center',
        margin: 0,
        width,
        height,
    }
})

export default SpinnerLoading;
