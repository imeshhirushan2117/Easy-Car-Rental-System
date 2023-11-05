import React, {Component} from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";

import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import CommonButton from "../common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


class SideRent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar: false,
            selectedRentDate: new Date(),
            selectedReturnDate: new Date(),
            isAvailable: false,
            isStatusHide: true
        };
    }

    render() {
        return (<Grid container direction={"column"} item xs={12} sm={12} md={12} lg={3} gap={2} height={'fit-content'}
                      className={'bg-white mt-4 rounded-2xl mb-10'}>
            <Grid container direction={"row"} justifyContent={'center'} className={'bg-blue-400 p-5 rounded-t-2xl'}>
                <Typography variant={'h4'} className={'font-semibold uppercase'}>
                    Enquiry Now
                </Typography>
            </Grid>
            <Grid item className={'p-5'}>

                <ValidatorForm useref={"form"}
                               onSubmit={this.handleSubmit}
                               onError={(errors) => console.log(errors)}
                    // className={classes.validator}
                ><Grid container item direction={"column"} gap={2}>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            disablePast={true}
                            showToolbar={false}
                            label="Rent Date"
                            inputFormat="MM/D/yyyy"
                            value={this.state.selectedDate}
                            onChange={this.handleChangeDate}
                            renderInput={(params) => <TextValidator
                                validators={["required"]}
                                style={{minWidth: '100%'}}
                                errorMessages={["This field is required"]}
                                {...params}
                            />}

                        />
                        <DesktopDatePicker
                            disablePast={true}
                            showToolbar={false}
                            label="Return Date"
                            inputFormat="MM/D/yyyy"
                            value={this.state.selectedReturnDate}
                            onChange={this.handleChangeDate}
                            renderInput={(params) => <TextValidator
                                validators={["required"]}
                                style={{minWidth: '100%'}}
                                errorMessages={["This field is required"]}
                                {...params}
                            />}

                        />
                        <Grid item>
                            <FormControlLabel control={<Checkbox/>} label="Book for month"/>
                            <br/>
                            <FormControlLabel control={<Checkbox/>} label="With Driver"/>
                        </Grid>
                        <Grid container justifyContent={'center'} item>
                            {/*<Typography variant={'p'} component={'span'} className={'bg-green-200 p-2 pl-4 pr-4 font-bold rounded-3xl border-2 border-green-400 bg-opacity-50 '}>
                                    Available Vehicle
                                </Typography>*/}
                            {!this.state.isStatusHide ? "" :
                                this.state.isAvailable ? <Typography variant={'p'} component={'span'}
                                                                     className={'bg-green-200 p-2 pl-4 pr-4 font-medium rounded-md border-2 border-green-400 bg-opacity-50 w-full text-center'}>
                                        Vehicle Available
                                    </Typography> :
                                    <Typography variant={'p'} component={'span'}
                                                className={'bg-red-200 p-2 pl-4 pr-4 font-medium rounded-md border-2 border-red-400 bg-opacity-50 w-full text-center'}>
                                        Vehicle Unavailable
                                    </Typography>}
                        </Grid>
                        <Grid container direction={'column'} gap={1} item>

                            <Typography variant={'span'} component={'div'}
                                        className={'flex justify-between'}>Vehicle <Typography
                                variant={'span'}>1*3</Typography> <Typography variant={'span'}>1300</Typography>
                            </Typography>
                            <hr/>
                            <Typography variant={'span'} component={'div'}
                                        className={'flex justify-between'}>LDW <Typography
                                variant={'span'}>1*3</Typography> <Typography variant={'span'}>1300</Typography>
                            </Typography>
                            <hr/>
                            <Typography variant={'span'} component={'div'}
                                        className={'flex justify-between'}>Driver <Typography
                                variant={'span'}>1*3</Typography> <Typography variant={'span'}>130000</Typography>
                            </Typography>
                            <hr/>
                            <Typography variant={'h6'} component={'div'}
                                        className={'flex justify-between'}>Total <Typography
                                variant={'span'}>130000</Typography> </Typography>

                        </Grid>
                        <Grid container direction={'column'} xs={12} justifyContent={'center'}>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<AddPhotoAlternateIcon className={'text-4xl m-auto'}/>}
                                sx={{marginRight: "1rem"}}
                                className={'flex w-full h-40 flex-col gap-3 m-0 p-0'}
                            >
                                Upload Bank Transfer Slip
                                <input type="file" accept="image/*" hidden/>
                            </Button>
                            <Typography variant={'p'} className={'text-red-400 font-thin capitalize'}>*The Loss Damage
                                Waiver payment will be returned after handing over the car or if the renter cancels the
                                rental request.</Typography>
                        </Grid>
                    </LocalizationProvider>
                    {/*<CommonButton
                            size="large"
                            variant="contained"
                            label="Find"
                            type="submit"
                            className="text-white bg-yellow-500 font-bold tracking-wide"
                        />*/}
                    <CommonButton
                        size="large"
                        variant="contained"
                        label="Book Now"
                        type="submit"
                        className="text-white bg-blue-500 font-bold tracking-wide"
                    />
                </Grid>

                </ValidatorForm>

            </Grid>
        </Grid>);
    }
}

export default SideRent;
