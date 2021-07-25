import React from "react"
import { View, Text, Image} from "react-native"
import styles from "./estilos/styleComponenteInterno3"


//alimentado via props e como esse tinha uma lista, foi criado um array com map (loop) para colocar os itens, o key seria
// como uma especie de value, nesse caso é obrigatório o return (no meu caso de uma view e um text para exibição do resultado.) 
//também colocado uma imagem.
export default function ComponentInfo3(props) {
  return(
    <View style={styles.viewprinc}>
      <View style={styles.texto}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        { props.beneficios.map((item) => {
          return (
            <View style={styles.textocampo} key={item.key}>
              <Text>{item.value}</Text>
            </View>
          )
        })}
      </View>
      <Image style={styles.imgm} source={require('./saude2.jpg')} />
    </View>
  )
}
