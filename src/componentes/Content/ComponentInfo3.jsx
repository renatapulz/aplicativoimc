import React from "react"
import { View, Text, Image, FlatList} from "react-native"
import styles from "./estilos/styleComponenteInterno3"

export default function ComponentInfo3(props) {
  return(
    <View style={styles.viewprinc}>
      <Image style={styles.imgm} source={require('./saude2.jpg')} />
      <View>
        <Text style={styles.textocampo}>{props.titulo}</Text>
        <FlatList data={props.beneficios} renderItem={({item}) => <Text>{item.key}</Text>} />
      </View>
    </View>
  )
}
