import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Garis, Ditolak} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {ILTgl} from '../../../assets';

const CardRiwayatResign = () => {
  return (
    <View style={styles.Content}>
      <View style={styles.wrapStatus}>
        <Text style={styles.pengajuan}>23 Nov 2021</Text>
        <Ditolak />
      </View>
      <Garis />
      <View style={styles.wrapTgl}>
        <ILTgl />
        <View style={styles.Masuk}>
          <Text style={styles.TMK}>Tgl Masuk Kerja</Text>
          <Text style={styles.TGL}>25 Nov 2018</Text>
        </View>
        <View>
          <Text style={styles.TMK}>Tgl keluar Kerja</Text>
          <Text style={styles.TGL}>27 Nov 2021</Text>
        </View>
      </View>
      <View style={styles.alasan}>
        <Text style={styles.TMK}>Alasan keluar</Text>
        <Text style={styles.TGL}>Pindah rumah diluar kota </Text>
      </View>
    </View>
  );
};

export default CardRiwayatResign;

const styles = StyleSheet.create({
  wrapStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Content: {
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  wrapTgl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Masuk: {
    marginLeft: -30,
  },
  TMK: {
    fontFamily: fonts.primary[500],
    color: colors.text.five,
    fontSize: 14,
  },
  TGL: {
    marginTop: 5,
    fontFamily: fonts.primary[600],
    color: colors.text.for,
    fontSize: 14,
  },
  alasan: {
    marginTop: 15,
  },
  pengajuan: {
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    fontSize: 14,
  },
});
