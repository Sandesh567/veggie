import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Bars3CenterLeftIcon, ShoppingCartIcon } from "react-native-heroicons/solid";

const categories = ['Oranges', 'Bananas', 'Pineapple', 'Apple', 'Avocado'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Oranges');

  return (
    <SafeAreaView style={styles.top}>
      <View style={styles.container}>
        <Bars3CenterLeftIcon size={30} color="red" />
        <TouchableOpacity >
          <ShoppingCartIcon size={25} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <Text style={styles.secondtext}>
          Seasonal
        </Text>
        <Text style={styles.secondtext}>
          Fruits and Vegetables
        </Text>
        <ScrollView
          style={styles.scroll}
        >
          {
            categories.map((category, index) => {
              let isActive = category == activeCategory;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  style={styles.list}

                >
                  <Text style={styles.listtext}>{category}</Text>
                  <Text style={styles.hyphen}>
                    _ _ _
                  </Text>
                </TouchableOpacity>
              )
            })
          }

        </ScrollView>
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
    margin: 30,
    padding: 2
  },
  categories: {
    marginTop: 4,
  },
  secondtext: {
    fontSize: 24,
    letterSpacing: 2,
  },
  scroll: {
    marginTop: 8,
    paddingLeft: 5,

  },
  list: {
    marginRight: 8,

  },
  listtext: {
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'column'
  },
  hyphen: {
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 3,
    marginLeft: 2
  }

})


