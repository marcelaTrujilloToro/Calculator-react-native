import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {BotonCal} from '../components/BotonCal';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {


    const [numero, setNumero] = useState('0')

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPeque}>10'000.000</Text>
      <Text style={styles.resultado}>10'000.000</Text>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9b9b9b" />
        <BotonCal texto="+/-" color="#9b9b9b" />
        <BotonCal texto="del" color="#9b9b9b" />
        <BotonCal texto="/" color="#ff9427" />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="7" />
        <BotonCal texto="8" />
        <BotonCal texto="9" />
        <BotonCal texto="*" color="#ff9427" />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="4" />
        <BotonCal texto="5" />
        <BotonCal texto="6" />
        <BotonCal texto="-" color="#ff9427" />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="1" />
        <BotonCal texto="2" />
        <BotonCal texto="3" />
        <BotonCal texto="+" color="#ff9427" />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="0" ancho />
        <BotonCal texto="." />
        <BotonCal texto="=" color="#ff9427" />
      </View>
    </View>
  );
};
