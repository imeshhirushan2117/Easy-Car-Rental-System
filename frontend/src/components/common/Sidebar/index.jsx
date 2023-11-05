import {Grid, Typography} from "@mui/material";
import React, {Component} from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LoginIcon from "@mui/icons-material/Login";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalculateIcon from "@mui/icons-material/Calculate";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PeopleIcon from "@mui/icons-material/People";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {Link} from "react-router-dom";

class Sidebar extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (<Grid
            container
            direction={"column"}
            className="border-r-2 border-neutral-300 min-h-screen"
        >
            <Grid
                item
                container
                className="h-12 p-4"
                direction={"row"}
                justifyContent="center"
                alignItems={"center"}
                alignContent="center"
            >
                <Typography className="text-xl font-bold text-orange-600 font-Ubuntu">
                    Admin Panel
                </Typography>
            </Grid>
            <hr className="border border-neutral-300"/>
            <Grid item className="pl-2">
                <ul>
                    <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                        ---------------------------------
                    </Typography>
                    <Link to={".."}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Dashboard
                            </Typography>
                        </li>
                    </Link>
                    <Link to={"../rentalrequests"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Rental Requests
                            </Typography>
                        </li>
                    </Link>
                    <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                        ---------------------------------
                    </Typography>
                    <Link to={"../vehiclemanage"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Vehicle Manage
                            </Typography>
                        </li>
                    </Link>
                    <Link to={"../vehiclerates"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Vehicle Rates
                            </Typography>
                        </li>
                    </Link>
                    <Link to={"../vehicletype"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Vehicle Types
                            </Typography>
                        </li>
                    </Link>
                    <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                        ---------------------------------
                    </Typography>
                    <Link to={"../drivermanage"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Driver Manage
                            </Typography>
                        </li>
                    </Link>
                    <Link to={"../employeemanage"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Employee Manage
                            </Typography>
                        </li>
                    </Link>
                    <Link to={"../customermanage"}>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Customers Manage
                            </Typography>
                        </li>
                    </Link>
                    {/*<Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                        Useful
                    </Typography>
                    <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-yellow-200 m-1 rounded-lg" onClick={this.clickHandle}>
                        <Typography
                            variant="h6"
                            component={"span"}
                            className="text-sm font-semibold text-gray-700"
                        >
                            Calculate Income
                        </Typography>
                    </li>
                    <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-yellow-200 m-1 rounded-lg" onClick={this.clickHandle}>
                        <Typography
                            variant="h6"
                            component={"span"}
                            className="text-sm font-semibold text-gray-700"
                        >
                            Daily Summry
                        </Typography>
                    </li>*/}
                    <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                        ---------------------------------
                    </Typography>
                    <Link to="/">
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-200 m-1 rounded-lg"
                            onClick={this.clickHandle}>
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-gray-700"
                            >
                                Logout
                            </Typography>
                        </li>
                    </Link>
                </ul>
            </Grid>
        </Grid>);
    }
}

export default Sidebar;
