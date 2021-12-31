import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import styles from './style';

const Search = ({ navigation }) => {
    const routes = useRoute();
    const { searchText } = routes.params;
    return (
        <View style={styles.container}>
            <Text>{searchText}</Text>
        </View>
    )
}

export default Search;