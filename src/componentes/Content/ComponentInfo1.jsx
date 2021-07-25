import React from "react"
import { View, Text, TouchableOpacity, Linking} from "react-native"
import styles from "./estilos/styleComponenteInterno1"

// alimentado via props e acrescentado um botao com link para outro site - Liking
export default function ComponentInfo1(props){
    return(
        <View style={styles.viewint}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor}</Text>
            <Text style={styles.conteudo}>{props.conteudo}</Text> 
            <TouchableOpacity style={styles.buttom} onPress={() => Linking.openURL('https://somos.lojaiplace.com.br/2020/02/19/exercicios-fisicos-5-dicas-para-quem-vai-comecar-a-praticar/')}>
                <Text style={styles.textbuttom}>
                    Para saber mais, clique aqui! 
                </Text>
            </TouchableOpacity>
        </View>
    )
}