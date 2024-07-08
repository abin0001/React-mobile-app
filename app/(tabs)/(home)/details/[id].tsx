import { useLocalSearchParams, Stack, useNavigation } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  // const navigation =useNavigation();
  // useEffect(()=>{
  //   navigation.setOptions({headerShown:false});

  // },[navigation])





  return (
    <View style={styles.container}>
      <Text>Details of user {id} </Text>
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
0