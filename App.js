import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <>
    <SafeAreaView style = {{style flex: 1, padding: 10}}>
    <View style={}>
      <Text>search</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container}>
    <Text>search</Text>
    <StatusBar style="auto" />
  </View>
  </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  
});
