import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AbsenMasuk,
  AbsenPulang,
  Absensi,
  Akun,
  Cuti,
  Dashboard,
  DetailRiwayatAbsensi,
  DetailInformasi,
  EditProfile,
  Informasi,
  Izin,
  Kehadiran,
  Login,
  Resign,
  Riwayat,
  RiwayatAbsensi,
  RiwayatCuti,
  RiwayatIzin,
  RiwayatResign,
  Splash,
  DetailRiwayatIzin,
  DetailRiwayatCuti,
  DetailRiwayatResign,
  Maps,
  AbsensiNew,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Informasi"
        component={Informasi}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenMasuk"
        component={AbsenMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenPulang"
        component={AbsenPulang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Resign"
        component={Resign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cuti"
        component={Cuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Izin"
        component={Izin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kehadiran"
        component={Kehadiran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Absensi"
        component={Absensi}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RiwayatResign"
        component={RiwayatResign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatCuti"
        component={RiwayatCuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatAbsensi"
        component={RiwayatAbsensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatIzin"
        component={RiwayatIzin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailInformasi"
        component={DetailInformasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailRiwayatAbsensi"
        component={DetailRiwayatAbsensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailRiwayatIzin"
        component={DetailRiwayatIzin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailRiwayatCuti"
        component={DetailRiwayatCuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailRiwayatResign"
        component={DetailRiwayatResign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsensiNew"
        component={AbsensiNew}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
