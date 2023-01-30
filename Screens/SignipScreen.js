import { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';


function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}){
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authetication failed','Please enter valid data');
    }
    setIsAuthenticating(false);
  }
  if(isAuthenticating){
    return <LoadingOverlay message={'Creating...'} />
  }

  return (
    <View>
    <View style={{paddingRight: 35, alignItems: 'center'}}>
    <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 50,
                }}>SingUp</Text> 
                </View>
    <AuthContent   onAuthenticate={signupHandler}/>
    </View>
    );
}

export default SignupScreen;