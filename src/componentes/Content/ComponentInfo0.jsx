import React from "react"
import { View, Text} from "react-native"
import styles from "./estilos/styeleComponenteInterno0"


export default function ComponentInfo0(props){
    return(
        <View style={styles.viewint}>
            <Text style={styles.textTitle}>{props.titulo}</Text>
        </View>
    )
}