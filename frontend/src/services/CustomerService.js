import axios from "../axios"
import qs from "qs";

class CustomerService {
    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('user/upload', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    deleteCustomers = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('user',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    customerCount = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user/count')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    generateCustomerID = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('user/generate')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
}

export default new CustomerService();