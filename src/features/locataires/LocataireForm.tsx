import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/react'
import React, { useState } from 'react'
import { LocataireModel } from './LocataireModel'

interface Props {
    ajouterLocataire: (newLocataire: LocataireModel) => void
}

export const LocataireForm = (props: Props) => {

    const [newLocataire, setNewLocataire] = useState<LocataireModel>({
        id: "",
        surname: "",
        firstname: "",
        age: 0,
        birthDate: "",
        phoneNumber: "",
        email: ""
    })

    /**
     * A chaque modification d'un input, injecte la valeur de cette dernière,
     * dans la state newLocataire
     * @param event 
     */
    const handleChange = (event: any) => {
        setNewLocataire({...newLocataire, [event.target.name]: event.detail.value})
    }

    /**
     * Envoit le nouveau locataire dans la méthode du parent
     * @param event 
     */
    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.ajouterLocataire(newLocataire)
    }

  return (
    <form onSubmit={handleSubmit}>
        <IonItem>
            <IonLabel>Prénom</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='surname'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Nom</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='firstname'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Date de naissance</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='birthDate'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Numéro de téléphone</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='phoneNumber'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput onIonChange={handleChange} type='text' name='email'></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Age</IonLabel>
            <IonInput onIonChange={handleChange} type='number' name='age'></IonInput>
        </IonItem>
        <IonButton type='submit'>Ajouter</IonButton>
    </form>
  )
}
