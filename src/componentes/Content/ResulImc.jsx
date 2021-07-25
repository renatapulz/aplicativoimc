import React from "react"
import { View, Text } from "react-native"
import styles from "./estilos/styleResultImc"

//criado para mostrar os botões e os resultados:
export default function ResultImc(props) {
  return(
    <View>
      <View style={styles.ResultImc}>
        <Text style={styles.info}>{props.messageResultImc}</Text>
        <Text style={styles.imc}>{props.resultImc}</Text>
      </View>  
      {/* implementado para aparecer as msgs: */}
      <View style={styles.ResultImc2}>
        <Text style={styles.textoResultImc2}>
          {props.message}
        </Text>
      </View>
    </View>
  )
}
