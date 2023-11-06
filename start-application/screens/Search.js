import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from '../styles/AppStyles';

const Search = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.screenBackground}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    </>
  );
};

export default Search;
