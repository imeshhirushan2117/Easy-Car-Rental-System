import {Grid} from '@mui/material'
import React, {Component} from 'react'
import Navbar from '../../../components/common/Navbar/Admin'
import Sidebar from '../../../components/common/Sidebar'
import Widget from '../../../components/common/widgets'
import CustomerService from "../../../services/CustomerService";
import VehicleService from "../../../services/VehicleService";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            bookings: '',
            availableCars: '',
            reservedCars: '',
            activeBooking: '',
            availableDrivers: '',
            occupiedDrivers: '',
            needToMaintenance: '',
            underMaintenance: ''
        }
    }

    usersCount = async () => {
        const res = await CustomerService.customerCount();
        if (res.status === 200) {
            this.setState({
                users: res.data.data
            })
        }
    }

    reservedCars = async () => {
        const res = await VehicleService.countByStatus('Reserved');
        if (res.status === 200){
            this.setState({
                reservedCars:res.data.data
            })
        }
    }

    availableCars = async () => {
        const res = await VehicleService.countByStatus('Available');
        if (res.status === 200){
            this.setState({
                availableCars:res.data.data
            })
        }
    }

    underMaintenanceCars = async () => {
        const res = await VehicleService.countByStatus('Under Maintains');
        if (res.status === 200){
            this.setState({
                underMaintenance:res.data.data
            })
        }
    }

    needMaintenanceCars = async () => {
        const res = await VehicleService.countByStatus('Need Maintains');
        if (res.status === 200){
            this.setState({
                needToMaintenance:res.data.data
            })
        }
    }

    async componentDidMount() {
        await this.usersCount()
        await this.availableCars()
        await this.reservedCars()
        await this.underMaintenanceCars()
        await this.needMaintenanceCars()

    }


    render() {
        return (
            <>

            <Grid container direction={'row'} columns='12'>
                <Grid item xs={'auto'}>
                    <Sidebar/>
                </Grid>
                <Grid item xs className=''>
                    <Navbar/>
                    <Grid container item xs={'auto'} className='flex p-5 gap-5'>
                        <Widget type="users" path="../customermanage" number={this.state.users}/>
                        <Widget type="bookings" path="/driver" number='10'/>
                        <Widget type="Available cars" path="../vehiclemanage" number={this.state.availableCars}/>
                        <Widget type="Reserved cars" path="../vehiclemanage" number={this.state.reservedCars}/>
                        <Widget type="Active Bookings" path="/driver" number='5'/>

                        <Widget type="Available Drivers" path="/driver" number='5'/>
                        <Widget type="Occupied Drivers" path="/driver" number='5'/>

                        <Widget type="Need To Maintenance" path="../vehiclemanage" number={this.state.needToMaintenance}/>
                        <Widget type="Under Maintenance" path="../vehiclemanage" number={this.state.underMaintenance}/>
                    </Grid>
                </Grid>
            </Grid>
            </>)
    }
}

export default Dashboard