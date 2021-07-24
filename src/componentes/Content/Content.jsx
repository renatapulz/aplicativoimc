import React from "react"
import { View, Text } from "react-native"

import ComponentInfo0 from "./ComponentInfo0";
import ComponentInfo from "./ComponentInfo";
import ComponentInfo2 from "./ComponentInfo2";
import ComponentInfo3 from "./ComponentInfo3";
import Form from './Form';
import styles from "./estilos/styleContent";

export default function Content(){
    return(
        <View style={styles.Campo}>
            <ComponentInfo0 titulo="Seja Bem Vindo ao SoulHealth!!"/>
            <ComponentInfo titulo="Saúde Mental é Real - Não minimize esse assunto" autor="Autor Desconhecido" conteudo=" Um em cada quatro brasileiros está sofrendo de algum tipo de problema dessa natureza. E o tema continua atrelado a tabus ultrapassados, que só pioram o sofrimento de enfrentar esses problemas."/>
            <ComponentInfo2 texto="Meditar é vigiar-se.
Meditar não é apenas sentar-se e concentrar-se, de vez em quando. É um árduo, disciplinado e diário caminho que inclui, sobretudo, estar atento e lúcido o tempo todo. Seja no trabalho, no lazer ou no descanso. A meditação real exige mente vigilante e compreende a totalidade da vida; sem exceção de fatos ou comportamentos: é o reto pensar e reto agir, para que aflore uma dimensão nova, primeiro na mente, depois na manifestação real."/>
            <Form/>
            <ComponentInfo titulo="Planeje seus exercícios físicos" autor="Autor Desconhecido" conteudo="O ideal é sempre intercalar os exercícios aeróbios com os de força, como musculação, mantendo também dias de descanso. O repouso é muito importante para recuperar o corpo e prevenir lesões. Já para não perder a motivação durante o treino, vale estabelecer metas de distância percorrida."/>
            <ComponentInfo3 texto="Benefícios de tomar água:              1. Regular a temperatura corporal;                                        2. Combater acne, estrias e celulite;                                                   3. Melhorar o funcionamento dos rins;                                                    4. Prevenir o aparecimento de pedras nos rins;                                          5. Facilitar a digestão                                    6. Diminuir o inchaço;                                      7. Melhorar a circulação sanguínea;                                      8. Ajudar a emagrecer."/>
        </View> 
    )
}