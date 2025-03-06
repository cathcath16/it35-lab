import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonChip 
  } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonChip>Default</IonChip>
      <IonChip color="primary">Primary</IonChip>
      <IonChip color="secondary">Secondary</IonChip>
      <IonChip color="tertiary">Tertiary</IonChip>
      <IonChip color="success">Success</IonChip>
      <IonChip color="warning">Warning</IonChip>
      <IonChip color="danger">Danger</IonChip>
      <IonChip color="light">Light</IonChip>
      <IonChip color="medium">Medium</IonChip>
      <IonChip color="dark">Dark</IonChip>
      </IonPage>
    );
  };
  
  export default Feed;