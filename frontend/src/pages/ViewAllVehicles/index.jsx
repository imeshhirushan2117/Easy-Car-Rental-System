import React, {Component} from 'react';
import {dividerClasses, Grid, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import Footer from "../../components/Footer";
import SideFilter from "../../components/common/SideFilter";
import VehicleCardTwo from "../../components/common/VehicleCardTwo";
import SearchIcon from '@mui/icons-material/Search';
import CommonButton from "../../components/common/Button";
import NavBarVehicle from "../../components/common/Navbar/User";
import vehicleService from "../../services/VehicleService";


class ViewAllVehicles extends Component {
    constructor(props) {
        super(props);
        this.state={
            vehicle:'',
            vehicles:[],
        }
    }

    async loadVehicles(){
        let res = await vehicleService.fetchVehicles();
        // let vehicle = null
        let vehicles = []
        if (res.status===200){
            /*console.log(res.data.data)
            vehicle=res.data.data.map((value, index) => {
                // value.id = value.driverId;
                <div>hey</div>
            })
            this.setState({
                vehicles:vehicle
            })*/
            res.data.data.map((value, index) => {
                // value.id = index;
                vehicles.push(value)
            })
            this.setState({
                vehicles:vehicles
            })
        }
    }

    async componentDidMount() {
        await this.loadVehicles();
        console.log(this.state.vehicles)
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container direction={"column"} xs={12} className={'mt-10'}>

                <Grid container item xs={12} spacing={5} className={'bg-gray-50 '}>

                    {/*<Grid item xs={12} className={'p-10'}>
                    <NavBar />
                </Grid>*/}

                    <NavBarVehicle/>

                    <Grid item xs={"auto"} className={'p-10'}>
                        <SideFilter/>
                    </Grid>

                    <Grid container direction={'row'} gap={'15px'} justifyContent={'center'} item xs
                          className={'bg-gray-100 pb-20 pr-10'}>

                        {this.state.vehicles.map((value,) => (
                            console.log(value),
                            <VehicleCardTwo key={value.registrationNumber} obj={value}/>
                        ))}

                        {/*{this.state.vehicles}*/}

                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}
                        {/*<VehicleCardTwo/>*/}


                    </Grid>
                </Grid>
                <Grid xs={12} item>
                    <Footer/>
                </Grid>
            </Grid>);
    }
}

export default ViewAllVehicles;