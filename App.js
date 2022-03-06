import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style = {{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style ={{ padding: 20, backgroundColor: 'green' }}>
      <Text>search</Text>
    </View>
    <View style = {{ flex: 1,padding: 20, backgroundColor: 'blue' }}>
    <Text>list</Text>
    <ExpoStatusBar style="auto" />
  </View>
  </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  
});