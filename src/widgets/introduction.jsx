//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constant';
import {AppColors} from '../theme/colors';

// create a component
const Introduction = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image.png')} style={styles.image} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 35,
          right: 0,
          backgroundColor: AppColors.PRIMARY,
          width: width * 0.4,
          height: height * 0.04,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{color: AppColors.WHITE, fontSize: 16, fontWeight: 'Bold'}}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default Introduction;
