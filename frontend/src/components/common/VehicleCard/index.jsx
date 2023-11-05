import {Typography} from "@mui/material";
import React, {Component} from "react";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {Link} from "react-router-dom";

// import car from "../../../assets/img/cover/car_01.jpg"

class VehicleCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            img:props.obj.imgs.length!==0?'http://localhost:8080/backend/'+props.obj.imgs[0].path:'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80g'
        }
    }

    render() {
        let vehicle = this.props.obj

        return (
            <Link to={`/vehicles/${this.props.obj.registrationNumber}`}>
                <div
                    style={{minWidth: "330px", height: "430.98px"}}
                    // style={{ width: "412.5px", height: "567.38px" }}
                    className="flex flex-col bg-stone-900 rounded-3xl order-blue-500 border hover:cursor-pointer hover:shadow-lg hover:shadow-yellow-500 hover:scale-105"
                >
                    <div
                        // className="rounded-t-3xl bg-hero-pattern bg-cover"
                        // style={{height: "204px",'var(ImageUrl)': this.state.img}}
                        style={{height: "204px",backgroundImage: `url(${this.state.img})`}}
                        className="rounded-t-3xl bg-cover"

                    ></div>
                    <div className="text-white flex flex-col justify-between">
                        <div
                            className="flex justify-center items-center text-center bg-slate-000 p-4"
                            style={{maxWidth: "330px", height: "93.06px"}}
                        >
                            <Typography
                                variant="h5"
                                className="font-bold break-words font-dosis"
                            >
                                {vehicle.brand}
                            </Typography>
                        </div>
                        <div
                            className=" flex flex-row justify-evenly items-center bg-stone-800 text-stone-300"
                            style={{height: "60px"}}
                        >
                            <div className="flex flex-col items-center">
                                <div>
                                    <LocalGasStationOutlinedIcon/>
                                </div>
                                <div>{vehicle.fuelType}</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div>
                                    <PeopleAltOutlinedIcon/>
                                </div>
                                <div>{vehicle.noOfPassengers}</div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center">
                                    <SettingsOutlinedIcon/>
                                </div>
                                <div>{vehicle.transmissionType}</div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row justify-around items-center bg-yellow-000 rounded-b-3xl "
                            style={{height: "70px"}}
                        >
                            <div className="flex flex-col justify-center items-center">
                                <Typography variant="p" className="font-bold">
                                    Rs. {vehicle.rates.dailyRate}
                                </Typography>
                                <Typography variant="p" className="overline">
                                    Day
                                </Typography>
                            </div>
                            <div></div>
                            <div className=" flex flex-col justify-center items-center">
                                <Typography variant="p" className="font-bold">
                                    Rs. {vehicle.rates.monthlyRate}
                                </Typography>
                                <Typography variant="p" className="overline">
                                    Month
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default VehicleCard;
