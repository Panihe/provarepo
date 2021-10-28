/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { removeTypeDuplicates } from '@babel/types';

const App: () => Node = () => {

  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig}>
          Benvinguts a React Native
        </Text>
        <Text style={styles.TitolBlau}>
          Este serà el primer exercici que fem.
        </Text>
        <Text style={styles.FontNormal}>
          normal
        </Text>
        <Text style={styles.FontNotoserif}>
          notoserif
        </Text>
        <Text style={{fontFamily: 'sans-serif', fontSize: 20}}>
          sans-serif
        </Text>
        <Text style={{fontFamily: 'san-serif-light', fontSize: 20}}>
          sans-serif-light
        </Text>
        <Text style={{fontFamily: 'sans-serif-thin', fontSize: 20}}>
          sans-serif-thin
        </Text>
        <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 20}}>
          sans-serif-condensed
        </Text>
        <Text style={{fontFamily: 'sans-serif-medium', fontSize: 20}}>
          sans-serif-medium
        </Text>
        <Text style={{fontFamily: 'serif', fontSize: 20}}>
          serif
        </Text>
        <Text style={{fontFamily: 'Roboto', fontSize: 20}}>
          roboto
        </Text>
        <Text style={{fontFamily: 'monospace', fontSize: 20}}>
          monospace
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TitolRoig: {
    color: 'red',
    fontSize: 24,
  },
  TitolBlau: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 20,
  },
  FontNormal: {
    fontFamily: 'normal',
    fontSize: 20
  },
  FontNotoserif: {
    fontFamily: 'notoserif',
    fontSize: 20
  },
});

export default App;
