import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter 
} from '@ionic/react';
import { useState } from 'react';
import './Login.css'; 

const Login: React.FC = () => {
  const navigation = useIonRouter();
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
      
      console.log('Username:', username);
      console.log('Password:', password);
      
      
      navigation.push('/it35-lab/app', 'forward', 'replace');
  }

  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>Login</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding page-background'> 
              <IonItem>
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput 
                      value={username} 
                      onIonChange={e => setUsername(e.detail.value!)} 
                      required 
                  />
              </IonItem>
              <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput 
                      type="password" 
                      value={password} 
                      onIonChange={e => setPassword(e.detail.value!)} 
                      required 
                  />
              </IonItem>
              <IonButton onClick={doLogin} expand="full" className="ion-margin-top">
                  Login
              </IonButton>
          </IonContent>
      </IonPage>    
  );
};

export default Login;