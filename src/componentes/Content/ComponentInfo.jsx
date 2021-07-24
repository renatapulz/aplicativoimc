import React from "react"
import { View, Text} from "react-native"
import styles from "./estilos/styleComponenteInterno"


export default function ComponentInfo(props){
    return(
        <View style={styles.viewint}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor}</Text>
            <Text style={styles.conteudo}>{props.conteudo}</Text> 
        </View>
    )
}