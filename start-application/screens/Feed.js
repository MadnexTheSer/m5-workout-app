import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from '../styles/AppStyles';

const Feed = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.screenBackground}>
        <Text style={styles.text}>Feed Screen</Text>
      </View>
    </>
  );
};

export default Feed;
