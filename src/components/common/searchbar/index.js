import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({ data }) => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const onDonePress = () => navigation.navigate('Search', { searchText: searchQuery });

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Ürün ara..."
                onChangeText={onChangeSearch}
                onBlur={onDonePress}
                style={styles.searchbar}
                value={searchQuery}
                inputStyle={styles.input}
            />
        </View>
    )
}

export default SearchBar;