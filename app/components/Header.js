import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>오늘의 할 일</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    headercontainer: {
      marginTop: 50,
      marginBottom: 50,
    },
    headertext:{
        fontSize: 25,
        fontWeight: "bold",
        color : '#3f4c66',
    }
});
