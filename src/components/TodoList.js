import React from 'react';
// import {Linking} from 'react-native';
import {Text} from 'react-native';
import {View, Button, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  tinyLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  textStyle: {
    color: '#999',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 20,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.tinyLogo}
          source={require('../assests/netflix.jpg')}
        />
        <View>
          <Text style={styles.title}>Locke & Key</Text>
          <Text style={styles.textStyle}>
            After their dad's murder, three siblings move with their mom to his
            ancestral estate, where they discover magical keys that unlock
            powers — and secrets.
          </Text>
        </View>
        {/* <View>
          <Button
            title="Press me"
            onPress={() =>
              Linking.openURL('https://www.netflix.com/in/title/80241239')
            }
          />
        </View> */}
      </View>
    </View>
  );
};

export default DisplayAnImage;
