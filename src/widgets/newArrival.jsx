//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidgetTitle from '../components/Widgets/WidgetTitle';
import {width} from '../utils/constant';

// create a component
const NewArrival = () => {
  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} />
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
export default NewArrival;
