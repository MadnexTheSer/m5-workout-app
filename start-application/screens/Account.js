import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from '../styles/AppStyles';

const Account = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.screenBackground}>
        <Text style={styles.text}>Account Screen</Text>
      </View>
    </>
  );

};


export default Account;
