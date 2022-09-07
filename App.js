import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './assets/styles/myStyles.js'

export default function App() {
  // Metodos
  const [montoPrestamo,setMontoPrestamo] = useState('');
  const [numeroCuota,setNumeroCuota] = useState('');
  const [valorCuota,setValorCuota] = useState('');
  const [totalDeuda,setTodalDeuda] = useState('')

  let calcular = (tipo) => {
    let miValorCuota = 0
    let miTotalDeuda = 0
    let cuotaParcial = 0

    {
      switch (tipo){
      case "Vivienda":
        cuotaParcial = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) * 0.015
        miValorCuota = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) + cuotaParcial
        break;
      case "Educación":
        cuotaParcial = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) * 0.01
        miValorCuota = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) + cuotaParcial
        break;
      case "Libre Inversión":
        cuotaParcial = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) * 0.02
        miValorCuota = (parseFloat(montoPrestamo) / parseFloat(numeroCuota)) + cuotaParcial
        miTotalDeuda = miValorCuota * parseFloat(numeroCuota)
        break;
    }
    setValorCuota(mivalorCuota)
    setTodalDeuda(miTotalDeuda)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={[{fontWeight:'bold'}]}>Simulador de Crédito</Text>
      <View style={[styles.contenido,{flexDirection:'row'}]}>
        <View style={[styles.alignViews]}>
          <Text style={styles.margenes}>Nombre</Text>
          <Text style={styles.margenes}>Monto Préstamo</Text>
          <Text style={styles.margenes}>Número de Cuotas</Text>
          <Text style={styles.margenes}>Valor de Cuota</Text>
        </View>
        <View style={[styles.alignViews]}>
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Text}
          />
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Number}
          />
        </View>
        <View style={[styles.alignViews,styles.espaciadoColumna]}>
          <Text style={styles.margenes}>Fecha</Text>
          <Text style={styles.margenes}>Tipo Préstamo</Text>
          <Text>{`\n`}</Text>
          <Text style={styles.margenes}>Total Deuda</Text>
        </View>
        <View style={[styles.alignViews]}>
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Text}
          />
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Text}
          />
          <Text>{`\n`}</Text>
          <TextInput
            placeholder=''
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            keyboardType={Number}
          />
        </View>
        <View style={[styles.espaciadoColumna,{alignItems:'center',justifyContent:'center'}]}>
          <Button
            title='Calcular/Guardar'
            color='green'
          />
          <Text>{`\n`}</Text>
          <Button
            title='Buscar'
            color='green'
          />
          <Text>{`\n`}</Text>
          <Button
            title='Limpiar'
            color='green'
          />
        </View>
      </View>
    </View>
  );
}

