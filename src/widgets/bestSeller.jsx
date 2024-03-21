//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetTitle from '../components/Widgets/WidgetTitle';

// create a component
const BestSeller = () => {
  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default BestSeller;
