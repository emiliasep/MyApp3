import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Browser } from '@capacitor/browser';
import './Tab3.css';


const Tab3: React.FC = () => {

  const openCapacitorSite = async () => {
    await Browser.open({ url: 'https://laurea.fi/en/' });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>How did I learn all this?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>How did I learn how to create an App?</h2>
        <p>This app is built with Ionic-React.</p>
        <p>I am studying BIT in Laurea UAS and I am doing a course on Mobile Application and design.</p>
        <p>You can learn more about Laurea UAS by clicking the link below.</p>
        <IonButton color='secondary' shape='round' onClick={openCapacitorSite}>Learn more!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
