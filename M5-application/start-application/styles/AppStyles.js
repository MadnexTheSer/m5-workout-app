import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black', // Set the background color for the tab bar
    shadowOpacity: 0, // Remove shadow on iOS
    borderTopWidth: 0, // Remove bottom border
  },
  screenBackground: {
    flex: 1,
    backgroundColor: 'black', // Set the background color for all screens
    paddingTop: StatusBar.currentHeight, // Add padding to account for the status bar height
    
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  text: {
    color: 'indigo',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center text
  },

});

export default styles;
