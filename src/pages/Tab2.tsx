import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {

  const [searchText, setSearchText] = useState('Type text here');

  const clickEventOnButton = () => {
    console.log(searchText)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} color="light"></IonSearchbar>
        <IonButton color="secondary" shape="round" onClick={clickEventOnButton}>Search</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
