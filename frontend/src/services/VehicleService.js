import axios from "../axios"
import qs from "qs";

class VehicleService {
    postVehicle = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle',data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    postVehicleIMG = async (data) =>{

        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle/upload',data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehicles = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    deleteVehicle = async (params) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    updateVehicle = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('vehicle',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }

    countByStatus = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/count/status',{params:{status:data}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehicle = async (id) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/regNo',{params:{regNo:id}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehiclesByStatus = async (status) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/status',{params:{status:status}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    generateVehicleID = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/generate')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
}
export default new VehicleService();