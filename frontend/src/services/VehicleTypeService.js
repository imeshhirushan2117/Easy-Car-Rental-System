import axios from "../axios"
import qs from "qs";

class VehicleTypeService {
    postVehicleType = async (data) => {
        const promise = new Promise((resolve, reject)=>{
            axios.post('vehicleType',qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                    return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehicleType = async () => {
        const promise = new Promise((resolve, reject)=>{
            axios.get('vehicleType')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    deleteVehicleType = async (params) => {
        console.log(params)
        const promise = new Promise((resolve, reject)=>{
            axios.delete('vehicleType', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    updateVehicleType = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('vehicleType',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }

    generateTypeID = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicleType/generate')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

}
export default new VehicleTypeService();