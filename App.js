//tudo indica que inline style não funciona
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import estilos from './styles/styles.js';
import Caixas from './components/caixas.js';

export default class App1 extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <Caixas></Caixas>
        <Text style={estilos.textoPadrao}>youtube.com/cfbcursos </Text>
        <Text style={estilos.textoTitulo}>cfbcursos.com.br</Text>
      </View>
    );
  }
}

// DO EMULADOR PQP O CODIGO CERTINHO VELHO, MAS DEU UM BUG LA FILHO DA PUTA, PASSEI 1 HR NESSA BAGAÇA
// NÃO FOI ERRO DE CODIGO NEM NADA MANO, FOI A PORRA DA PORTA DO EMULADOR QUE TAVA COM PROBLEMA
// FIZ O RESTART DO PACKAGE E PRONTO, MANO. O OUTRO PROJETO DEVE TER DADO MERDA POR CAUSA DESSA MESMA PORRA
// VOLTE LÁ DEPOIS PUTA QUE PARIU
// puta que pariu caralho, no outro dia o emulador bugou em uma desgraça la, tava tudo certinho
// foi só eu apagar a linha e colocar ela de novo e a desgraça voltou, pqp
// bug misera, não queria pegar a cor, eu removi a linha e botei dnv e ai funcionou, mas vsf namoral
