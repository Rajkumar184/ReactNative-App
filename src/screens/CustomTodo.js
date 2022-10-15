import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomTodo = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello this wolrd</Text>
      <Text>Hello this wolrd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default CustomTodo;
