import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../../common/Button";
import VehicleCard from "../../common/VehicleCard";
import vehicleService from "../../../services/VehicleService";

class PremiumCars extends Component {

  constructor(props) {
    super(props);
    this.state={
      vehicles:[],
    }
  }

  async loadPremiumCars(){
    let res = await vehicleService.fetchVehiclesByStatus("Available");
    let vehicles = []
    if (res.status===200){
      res.data.data.filter(vehicle=>vehicle.type.type.includes('Premium')).slice(0, 4).map((value, index) => {
        vehicles.push(value)
      })

      this.setState({
        vehicles:vehicles
      })

    }
  }

  async componentDidMount() {
    await this.loadPremiumCars();
  }

  render() {
    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="stretch"
        className="backdrop-blur-md pt-10"
      >
        <Grid
          item
          direction="column"
          container
          className="bg-zinc-000 bg-red-000 text-white text-center"
        >
          <Grid item>
            <Typography
              variant="h4"
              component="h2"
              className="font-extrabold p-5 text-blue-500 font-dosis"
            >
              Premium Cars
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          gap={5}
          item
          flex={"1"}
          className="p-6 w-min"
        >
          <Grid container item justifyContent="center" gap={5}>
            {this.state.vehicles.map((value) => (
                value.length==0?console.log('hey'):console.log('hello'),
                <VehicleCard key={value.registrationNumber} obj={value}/>
            ))}
            {/*<VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />*/}
          </Grid>
          {/*<Grid>
            <CommonButton
              size="large"
              variant="outlined"
              label="See More"
              className="text-white border-white hover:bg-white hover:text-black font-bold"
            />
          </Grid>*/}
        </Grid>
      </Grid>
    );
  }
}
export default PremiumCars;
