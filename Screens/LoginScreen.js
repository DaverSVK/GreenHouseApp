
import { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';


function LoginScreen() {
  
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const authCtx = useContext(AuthContext);
  async function loginHandler({email, password}){
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authetication failed','Please enter valid data');
    }
    
    setIsAuthenticating(false);
  }
  if(isAuthenticating){
    return <LoadingOverlay message={'Loging in...'} />
  }


  
  return (<View>
    <View style={{paddingRight: 35, alignItems: 'center'}}>
    <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 50,
                }}>LogIn</Text> 
                </View>
    <AuthContent isLogin  onAuthenticate={loginHandler}/>
    </View>);
}

export default LoginScreen;

