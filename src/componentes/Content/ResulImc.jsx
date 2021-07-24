import React from "react"
import { View, Text } from "react-native"
import styles from "./estilos/styleResultImc"


export default function ResultImc(props){
    return(
        <View style={styles.ResultImc}>
            <Text style={styles.info}>{props.messageResultImc}</Text>
            <Text style={styles.imc}>{props.resultImc}</Text>
        </View>
    )
}