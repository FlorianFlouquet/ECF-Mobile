import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/react'
import React, { useState } from 'react'
import { VehiculesModel } from './VehiculesModel'

interface Props {
    ajouterVehicule: (newVehicule: VehiculesModel) => void
}

export const VehiculeForm = (props: Props) => {

    const [newVehicule, setNewVehicule] = useState<VehiculesModel>({
        id: "",
        brand: "",
        model: "",
        state: "",
        licenseNumber: "",
        type: "",
        price: 0,
        available: true
    })

    /**
     * A chaque modification d'un input, injecte la valeur de cette dernière,
     * dans la state newVehicule
     * @param event 
     */
    const handleChange = (event: any) => {
        setNewVehicule({...newVehicule, [event.target.name]: event.detail.value})
    }

    /**
     * Envoit le nouveau véhicule dans la méthode du parent
     * @param event 
     */
    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.ajouterVehicule(newVehicule)
    }

  return (
    <form onSubmit={handleSubmit}>
        <IonItem>
            <IonLabel>Marque</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='brand'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Modèle</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='model'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Etat</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='state'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>immatriculation</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='licenseNumber'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Type</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='type'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Prix</IonLabel>
            <IonInput onIonChange={handleChange} type='number' name='price'></IonInput>
        </IonItem>
        <IonButton type='submit'>Ajouter</IonButton>
    </form>
  )
}
