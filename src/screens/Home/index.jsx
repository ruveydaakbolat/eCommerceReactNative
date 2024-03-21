import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/screenStyle';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };

  return (
    <View style={screenStyle.container}>
      <FlatList data={widgets} renderItem={renderItem} />
    </View>
  );
};

export default Home;
