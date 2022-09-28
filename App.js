import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Projeto from './components/Projeto';


export default function App() {
  const [projeto, setProjeto] = useState();
  const [listaProjetos, setListaProjetos] = useState([]);

  const adicionarProjeto = () => {
    Keyboard.dismiss();
    setListaProjetos([...listaProjetos, projeto])
    setProjeto(null);
  }

  const deletarProjeto = (index) => {
    let copiaItens = [...listaProjetos];
    copiaItens.splice(index,1);
    setListaProjetos(copiaItens);
  }

  return (
    <View style={styles.container}>

      {/* Tela Home */}
      <View style={styles.telaHome}>
        <Text style={styles.homeTitulo}>Lista de projetos</Text>

        <View style={styles.itens}>
          {
            listaProjetos.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deletarProjeto(index)}>
                  <Projeto text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>  
      </View>

      {/* Cadastrar um projeto */}
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
          style={styles.cadastrarProjeto}
      >
          <TextInput style={styles.input} placeholder = {'Adicione um projeto'} value={projeto} onChangeText={text => setProjeto(text)} />

          <TouchableOpacity onPress={() => adicionarProjeto()}>
            <View style={styles.botaoCadastrarProjeto}>
              <Text style={styles.adicionarTexto}>+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B45',
  },
  telaHome: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
homeTitulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#FFF',
},
itens: {
  marginTop: 30,
},
cadastrarProjeto: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#CAFF70',
  borderRadius: 60,
  borderColor: '#A2CD5A',
  borderWidth: 1,
  width: 250,
},
botaoCadastrarProjeto: {
  width: 60,
  height: 60,
  backgroundColor: '#CAFF70',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#A2CD5A',
  borderWidth: 1,
},
adicionarTexto: {},
});
