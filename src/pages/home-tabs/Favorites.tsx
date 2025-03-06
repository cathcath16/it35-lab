import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonBadge, IonItem, IonLabel, IonList  
  } from '@ionic/react';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
      <IonItem>
        <IonLabel>Followers</IonLabel>
        <IonBadge color="primary">22k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Likes</IonLabel>
        <IonBadge color="secondary">118k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Stars</IonLabel>
        <IonBadge color="tertiary">34k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Completed</IonLabel>
        <IonBadge color="success">80</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Warnings</IonLabel>
        <IonBadge color="warning">70</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Notifications</IonLabel>
        <IonBadge color="danger">1000</IonBadge>
      </IonItem>
    </IonList>
      </IonPage>
    );
  };
  
  export default Favorites;