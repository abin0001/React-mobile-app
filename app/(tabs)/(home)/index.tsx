import { Link } from 'expo-router';
import { useNavigation, Stack } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const navigation =useNavigation();

  useEffect(()=>{
    navigation.setOptions({headerShown:false});
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
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
