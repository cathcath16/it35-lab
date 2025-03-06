import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonBadge, IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle 
} from '@ionic/react';
import './Favorites.css'; 

const Favorites: React.FC = () => {
  return (
      <IonPage className="page-background"> 
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot='start'>
                      <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Favorites</IonTitle>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBavOOQ_f_xSRFBYXPTdTAvxJ2E8k3FgWfg&s" alt="Instagram Logo" className="instagram-logo" />
              </IonToolbar>
          </IonHeader>
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle>INSTAGRAM</IonCardTitle>
                  <IonCardSubtitle>Catherene Labinisia</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>🎨 Making pixels look pretty
              🌏 Exploring design & cultures</IonCardContent>
          </IonCard>
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