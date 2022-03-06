import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style = {{ flex: 1 }}>
    <View style ={{ padding: 20, backgroundColor: 'green' }}>
      <Text>search</Text>
      <StatusBar style="auto" />
    </View>
    <View style = {{ flex: 1,padding: 20, backgroundColor: 'blue' }}>
    <Text>list</Text>
    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  
});