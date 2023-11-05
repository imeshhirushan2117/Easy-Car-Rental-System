import React, {Component} from 'react';
import {FormControlLabel, Grid, Typography} from "@mui/material";

import Checkbox from '@mui/material/Checkbox';
import CommonButton from "../Button";

class SideFilter extends Component {
    render() {
        return (<Grid container direction={"column"} className={"pl-2 pr-3"}>
                <Grid item >
                    <Grid item className="pl-2">
                        <ul>
                            <Typography variant="p" component={"p"}
                                        className="text-md font-bold text-gray-600 mt-4 mb-1">
                                Transmission Type
                            </Typography>

                            <li className="flex flex-col items-left gap-0 p-2 mr-3">
                                {/*<FormGroup>*/}
                                <FormControlLabel control={<Checkbox/>} label="Auto"/>
                                <FormControlLabel control={<Checkbox/>} label="Manual"/>
                                {/*</FormGroup>*/}
                            </li>


                            <Typography variant="p" component={"p"}
                                        className="text-md font-bold text-gray-600 mt-4 mb-1">
                                Brand
                            </Typography>

                            <li className="flex flex-col items-left gap-0 p-2 mr-3">
                                {/*<FormGroup>*/}
                                <FormControlLabel control={<Checkbox/>} label="Honda"/>
                                <FormControlLabel control={<Checkbox/>} label="Suzuki"/>
                                <FormControlLabel control={<Checkbox/>} label="Toyota"/>
                                {/*</FormGroup>*/}
                            </li>


                            <Typography variant="p" component={"p"}
                                        className="text-md font-bold text-gray-600 mt-4 mb-1">
                                Type
                            </Typography>

                            <li className="flex flex-col items-left gap-0 p-2 mr-3">
                                {/*<FormGroup>*/}
                                <FormControlLabel control={<Checkbox/>} label="General"/>
                                <FormControlLabel control={<Checkbox/>} label="Premium"/>
                                <FormControlLabel control={<Checkbox/>} label="Luxury"/>
                                {/*</FormGroup>*/}
                            </li>


                            <Typography variant="p" component={"p"}
                                        className="text-md font-bold text-gray-600 mt-4 mb-1">
                                Fuel Type
                            </Typography>

                            <li className="flex flex-col items-left gap-0 p-2 mr-3">
                                {/*<FormGroup>*/}
                                <FormControlLabel control={<Checkbox/>} label="Petrol"/>
                                <FormControlLabel control={<Checkbox/>} label="Diesel"/>
                                <FormControlLabel control={<Checkbox/>} label="Electric"/>
                                {/*</FormGroup>*/}
                            </li>

                            <li className="flex flex-col items-left p-2 mr-3">
                                <CommonButton
                                    size="small"
                                    variant="outlined"
                                    label="Clear"
                                    className=""
                                    // onClick={() => this.setState({ open: true })}
                                />
                            </li>


                        </ul>
                    </Grid>
                </Grid>
            </Grid>);
    }
}

export default SideFilter;