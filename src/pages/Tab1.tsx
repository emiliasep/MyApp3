import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { apertureOutline, heartOutline, homeOutline, reorderThreeOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {

  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader>
              <IonLabel>Navigate here</IonLabel>
            </IonListHeader>
            <IonMenuToggle autoHide>
              <IonItem button routerLink="/tab1">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem button routerLink="/service">
                <IonIcon slot="start" icon={apertureOutline}></IonIcon>
                <IonLabel>Service</IonLabel>
              </IonItem>
              <IonItem button routerLink="/tab3">
                <IonIcon slot="start" icon={heartOutline}></IonIcon>
                <IonLabel>How?</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Emilia's App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Welcome to My App!</h2>
          <p>This app showcases what I have learnt on this Mobile Application development and design -course.</p>

        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Tab1;

