import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { Stack, useNavigation } from 'expo-router';

export default function SettingsScreen() {


  const navigation =useNavigation();

  useEffect(()=>{
    navigation.setOptions({headerShown:false});
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
