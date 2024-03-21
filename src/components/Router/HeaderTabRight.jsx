import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';

const HeaderTabRight = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.button}>
        {count > 0 && (
          <View
            style={{
              backgroundColor: AppColors.PRIMARY,
              justifyContent: 'center',
              alignItems: 'center',
              width: 20,
              height: 20,
              borderRadius: 100,
              position: 'absolute',
              zIndex: 100,
              right: -10,
              top: -8,
            }}>
            <Text
              style={{color: AppColors.WHITE, fontSize: 12, fontWeight: '500'}}>
              {count}
            </Text>
          </View>
        )}
        <ShoppingCart size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
});

export default HeaderTabRight;
