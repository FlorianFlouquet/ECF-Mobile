import { IonCard, IonCol, IonContent, IonHeader, IonImg, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import { VehiculesModel } from './VehiculesModel'

interface Props {
    vehicule: VehiculesModel
}

export const VehiculeCard = (props: Props) => {
  return (
    <IonCard>
        <IonHeader>
            <IonRow>
                <IonCol>
                    <IonImg src='/assets/image/ugly-car.png'></IonImg>
                </IonCol>
                <IonCol>
                    <IonContent>
                        <IonRow class="ion-justify-content-center">
                            <IonLabel>{props.vehicule.brand}</IonLabel>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonLabel class='ion-padding'>{props.vehicule.model}</IonLabel>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            {props.vehicule.available ? 
                                <IonLabel color="success">Disponible</IonLabel> :
                                <IonLabel color="danger">Indisponible</IonLabel>
                            }
                        </IonRow>
                    </IonContent>
                </IonCol>
            </IonRow>
        </IonHeader>
    </IonCard>
  )
}
