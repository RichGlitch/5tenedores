import React,{useState} from 'react';
import {StyleSheet,ScrollView, View, Text, ActivityIndicator,Image} from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import {validateEmail} from '../../utils/Validation';
import * as firebase from 'firebase';
import Loading from '../../components/Loading';
import { withNavigation } from 'react-navigation';


function LoginForm(props){
    const {toastRef, navigation} = props;
    const [hidePassword,setHidePassword] = useState(true);
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [isVisibleLoading,setIsVisibleLoading] = useState(false);

    const login = async() => {
      setIsVisibleLoading(true);
      if(!email || !password ){
          toastRef.current.show("Todos los campos son obligatorios");
      }else{
        if(!validateEmail(email)){
            toastRef.current.show('el email no es correcto ');
        }else{
            await firebase
                    .auth()
                    .signInWithEmailAndPassword(email,password)
                    .then(() => {
                        //toastRef.current.show('usuario creado');
                        navigation.navigate("MyAccount");
                    })
                    .catch(()=>{
                        toastRef.current.show('error al ingresar.');
                    });
        }
      }
      setIsVisibleLoading(false);
    };
    return (
        <View style={styles.FormContainer} behavior="padding" enabled>
            <Input
                email={true}
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                onChange={e => setEmail(e.nativeEvent.text )}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
            
                }
            />
        <Input
            placeholder="Contraseña"
            password={true}
            secureTextEntry={hidePassword}
            containerStyle={styles.inputForm}
            onChange={e => setPassword(e.nativeEvent.text )}
            rightIcon={
                <Icon
                    onPress={() => setHidePassword(!hidePassword)}
                    type="material-community"
                    name={hidePassword ? "eye-outline" : "eye-off-outline"}
                    iconStyle={styles.iconRight}
                />
        
            }
        />
        <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            title="Iniciar Sesión"
            onPress={() => login()}
        />
        <Loading text="Iniciando sesión" isVisible={isVisibleLoading}/>
        </View>
    )
}
export default withNavigation(LoginForm);

const styles= StyleSheet.create({
    FormContainer : {
       flex:1,
       alignItems:"center",
       justifyContent:"center",
       marginTop:30
    },
    logo:{
        height:150,
        width:"100%",
        marginTop:20,
    },
    inputForm:{
        width:"100%",
        marginTop:20
    },
    iconRight:{
        color:"#c1c1c1"
    },
    btnStyle:{
        backgroundColor:"#1B98E0"
    },
    btnContainer:{
        marginTop:20,
        width:"95%"
    }
})