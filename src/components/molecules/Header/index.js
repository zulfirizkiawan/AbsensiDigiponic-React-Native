import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Gap} from '../..';
import {ICBack} from '../../../assets';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Buttons type="icon-only" onPress={onPress} />
      <Text style={styles.TxtHeader}>Jam Masuk</Text>
      <Gap width={23} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    elevation: 10,
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontWeight: '700',
  },
});
