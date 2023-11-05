import axios from "../axios";
import qs from 'qs';

class EmployeeService {
    postEmployee = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('staff', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchEmployee = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('staff')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    deleteEmployee = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('staff', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    updateEmployee = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('staff', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    generateStaffID = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('staff/generate')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
}
export default new EmployeeService();