import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Bars3CenterLeftIcon, ShoppingCartIcon } from "react-native-heroicons/solid";

export default function App() {



  return (
    <SafeAreaView style={styles.top}>
      <View style={styles.container}>
        <Bars3CenterLeftIcon size={30} color="red" />
        <TouchableOpacity >
          <ShoppingCartIcon size={25} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: '#EFE3C2',


  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "30",
    padding: '2'
  },

})


