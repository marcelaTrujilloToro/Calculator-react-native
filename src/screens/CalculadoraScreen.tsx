import React from 'react';
import {Text, View} from 'react-native';
import {BotonCal} from '../components/BotonCal';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    borrar,
    dividir,
    sumar,
    restar,
    multiplicar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPeque}> {numeroAnterior} </Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCal texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCal texto="del" color="#9b9b9b" accion={borrar} />
        <BotonCal texto="/" color="#ff9427" accion={dividir} />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="*" color="#ff9427" accion={multiplicar} />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#ff9427" accion={restar} />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#ff9427" accion={sumar} />
      </View>

      {/* fila botones */}
      <View style={styles.fila}>
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};
