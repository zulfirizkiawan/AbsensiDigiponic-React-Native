import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Gap, Header, TabAkun} from '../../components';
import {colors, fonts, getData} from '../../utils';

const Akun = ({navigation}) => {
  const keluarAkun = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  const [userProfile, setUserProfile] = useState('');
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
      console.log('userProfile :', res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.shadow}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <View style={styles.wrapProfile}>
          <Image source={DummyProfile} style={styles.avatar} />
          <Gap height={24} />
          <Text style={styles.nama}>{userProfile.nama}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
        </View>
      </View>
      <Gap height={40} />
      <View style={styles.wrapAkun}>
        <TabAkun
          category="Edit Profile"
          categoryStrip="Benar"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <TabAkun
          category="Pusat Bantuan"
          categoryStrip="Benar"
          onPress={() => alert('hallo')}
        />
        <TabAkun category="Keluar Akun   " onPress={keluarAkun} />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    fontFamily: fonts.primary[700],
  },
  page: {
    backgroundColor: '#F9FBFC',
    flex: 1,
  },
  TxtEdit: {
    fontSize: 14,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    width: 76,
  },
  wrapProfile: {
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#9C9C9C',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  nama: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  email: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.primary,
    marginTop: 5,
  },
  wrapAkun: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: '#9C9C9C',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 10,
  },
});
