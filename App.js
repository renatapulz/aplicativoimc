import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './src/componentes/Title/Header';
import Content from './src/componentes/Content/Content';
import styles from './src/componentes/Content/estilos/styleContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Header/>
      <Content/>
      </ScrollView>
    </View>
  );
}


