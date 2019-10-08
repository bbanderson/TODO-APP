import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Subtitle({title}) {
  return (
    <View>
      <Text style = {styles.subtitletext}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subtitletext:{
        fontSize: 16,
        fontWeight: "bold",
        color : '#3f4c66',
    }
});
