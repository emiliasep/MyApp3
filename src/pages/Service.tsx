import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';

const Service: React.FC = () => {
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Service</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Service</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Service page" />
            </IonContent>
        </IonPage>
    );
};

export default Service;
