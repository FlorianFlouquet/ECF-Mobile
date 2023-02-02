import { IonCard, IonCol, IonContent, IonHeader, IonImg, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import { LocataireModel } from './LocataireModel'


interface Props {
    locataire: LocataireModel
}

export const LocataireCard = (props : Props) => {

  return (
    <IonCard>
        <IonHeader>
            <IonRow>
                <IonCol>
                    <IonImg src='/assets/image/pingu.jpg'></IonImg>
                </IonCol>
                <IonCol>
                    <IonContent>
                        <IonRow class="ion-justify-content-center">
                            <IonLabel>{props.locataire.firstname}</IonLabel>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonLabel class='ion-padding'>{props.locataire.surname}</IonLabel>
                        </IonRow>
                    </IonContent>
                </IonCol>
            </IonRow>
        </IonHeader>
    </IonCard>
  )
}
