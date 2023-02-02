import axios from "axios"
import { VehiculesModel } from "./VehiculesModel";
import uuid from 'react-uuid'

const API_URL = "http://localhost:8080/vehicles"

class VehiculesService {
    /**
     * Retourne tous les véhicules
     * @returns 
     */
    findAllVehicules = () => {
        return axios.get(API_URL);
    }

    /**
     * Retourne un véhicule par rapport à son id
     * @param id 
     * @returns 
     */
    findVehiculeById = (id: string) => {
        return axios.get(`${API_URL}/${id}`)
    }

    /**
     * Ajoute un véhicule
     * @param newVehicule 
     * @returns 
     */
    addVehicule = (newVehicule: VehiculesModel) => {
        newVehicule.id = uuid();
        return axios.post(API_URL, newVehicule);
    }

    /**
     * Supprime un véhicule par rapport à son id
     * @param id 
     * @returns 
     */
    deleteVehicule = (id: string) => {
        axios.delete(`${API_URL}/${id}`);
        return this.findAllVehicules();
    }

    /**
     * Met à jour un véhicule
     * @param updatedVehicule 
     * @returns 
     */
    updateVehicule = (updatedVehicule: VehiculesModel) => {
        return axios.put(`${API_URL}/${updatedVehicule.id}`, updatedVehicule);
    }
}

export const vehiculesService = Object.freeze(new VehiculesService());