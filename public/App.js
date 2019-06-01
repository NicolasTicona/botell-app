/**
  Botell App es una aplicación que usa el Reconocimiento de Objetos
  para generar un ambiente de reciclaje interactivo.
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import bgImage from './images/background.jpg'
import logo from './images/logo.png'

const {width: WIDTH} = Dimensions.get('window')
/*
:: INFORMATION FOR API REST - JSON ::

const User = ( props ) =>(
  <li>{props.name}--------{props.email}</li>
)

class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
  }
  componentWillMount(){
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(users =>{
      
        users.results.forEach(user => {
          let data = {
            name:user.name.first,
            email:user.email,
            password:user.login.password
          }          
          console.log( data )
          this.setState({ users:this.state.users.concat([data]) }) 
        })
    })

  }
*/
export default class App extends Component {
<<<<<<< HEAD
  state = {
    username : '',
    email : '',
    password : ''
  };

  handleChangeUsername = (e, fieldName) => {
    this.setState({
      username: e.target.value
    });

    this.uploadValidators(fieldName, e.target.value);
  };

  handleChangeEmail = (e, fieldName) => {
    this.setState({
      email: e.target.value
    });

    this.uploadValidators(fieldName, e.target.value);
  };

  handleChangePasssword = (e, fieldName) => {
    this.setState({
      password: e.target.value
    });

    this.uploadValidators(fieldName, e.target.value);
  };

  handleSave = () => {
    console.log(this.state);
  }

  
=======
>>>>>>> b1e5f3af8979a58c25e946a5d2918c2eb8e911b2
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>Botell App on React Native</Text>
        </View>
        <View style={styles.imputContainer}>
          <TextInput
            style={styles.imput}
            placeholder = {'Username'}
            placeholderTextColor = {'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid = 'transparent'
          />
        </View>
        
        <View style={styles.imputContainer}>
          <TextInput
            style={styles.imput}
            placeholder = {'Email'}
            placeholderTextColor = {'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid = 'transparent'
          />
        </View>

        <View style={styles.imputContainer}>
          <TextInput
            style={styles.imput}
            placeholder = {'Password'}
            secureTextEntry = {true}
            placeholderTextColor = {'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid = 'transparent'
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 170
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  imput: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  imputContainer: {
    marginTop: 10
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
