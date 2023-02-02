import axios from "axios"
import { LocataireModel } from "./LocataireModel";
import uuid from 'react-uuid'

const API_URL = "http://localhost:8080/users"

class LocatairesService {
    /**
     * Retourne tous les locataires
     * @returns 
     */
    findAllLocataires = () => {
        return axios.get(API_URL);
    }

    /**
     * Retourne un locataire par rapport à son id
     * @param id 
     * @returns 
     */
    findLocataireById = (id: string) => {
        return axios.get(`${API_URL}/${id}`)
    }

    /**
     * Ajoute un locataire
     * @param newLocataire 
     * @returns 
     */
    addLocataire = (newLocataire: LocataireModel) => {
        newLocataire.id = uuid();
        return axios.post(API_URL, newLocataire);
    }

    /**
     * Supprime un locataire
     * @param id 
     * @returns 
     */
    deleteLocataire = (id: string) => {
        axios.delete(`${API_URL}/${id}`);
        return this.findAllLocataires();
    }

    /**
     * Met à jour un locataire
     * @param updatedLocataire 
     * @returns 
     */
    updateLocataire = (updatedLocataire: LocataireModel) => {
        return axios.put(`${API_URL}/${updatedLocataire.id}`, updatedLocataire);
    }
}

export const locatairesService = Object.freeze(new LocatairesService());