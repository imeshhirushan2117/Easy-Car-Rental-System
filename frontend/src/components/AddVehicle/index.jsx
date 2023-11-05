import {Button, Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from '@mui/material/MenuItem';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CommonButton from "../common/Button";
import VehicleReatsService from "../../services/VehicleReatsService";
import VehicleTypeService from "../../services/VehicleTypeService";
import VehicleService from "../../services/VehicleService";
import CustomSnackBar from "../common/SnakBar";
import vehicleService from "../../services/VehicleService";


class AddNewVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "registrationNumber": props.isUpdate ? props.obj.registrationNumber : '',
                "brand": props.isUpdate ? props.obj.brand : '',
                "color": props.isUpdate ? props.obj.color : '',
                "status": props.isUpdate ? props.obj.status : '',
                "noOfPassengers": props.isUpdate ? props.obj.noOfPassengers : '',
                "runningKm": props.isUpdate ? props.obj.runningKm : '',
                "fuelType": props.isUpdate ? props.obj.fuelType : '',
                "transmissionType": props.isUpdate ? props.obj.transmissionType : '',
                "type": {
                    "vehicleTypeId": props.isUpdate ? props.obj.type.vehicleTypeId : '',
                    "ldw": props.isUpdate ? props.obj.type.ldw : '',
                    "type": props.isUpdate ? props.obj.type.type : '',
                },
                "rates": {
                    "rateId": props.isUpdate ? props.obj.rates.rateId : '',
                    "monthlyRate": props.isUpdate ? props.obj.rates.monthlyRate : '',
                    "dailyRate": props.isUpdate ? props.obj.rates.dailyRate : '',
                    "freeKmForaMonth": props.isUpdate ? props.obj.rates.freeKmForaMonth : '',
                    "freeKmForaDay": props.isUpdate ? props.obj.rates.freeKmForaDay : '',
                    "pricePerExtraKm": props.isUpdate ? props.obj.rates.pricePerExtraKm : '',
                },
                "imgs": [
                    {
                        "imgId": "ff8ba0bf-a019-4754-b980-0cdaca5ff08f",
                        "path": "uploads/3456.jpg"
                    }
                ]

            },
            ratesData: [],
            typeData: [],

            alert: false,
            message: '',
            severity: '',
            file: null
        };
    }

    fetchRatesDataForSelect = async () => {
        const rates = await VehicleReatsService.fetchRates();
        let ratesData = [];
        if (rates.status === 200) {
            rates.data.data.map((value, index) => {
                ratesData.push(value)
            })
            this.setState({
                ratesData: ratesData,
            })
            // console.log('frd')
        }
    }

    fetchVTypeDataForSelect = async () => {
        const res = await VehicleTypeService.fetchVehicleType();
        let typeData = [];
        if (res.status === 200) {
            res.data.data.map((value, index) => {
                typeData.push(value)
                console.log(value)
            })
            this.setState({
                typeData: typeData,
            })
        }

    }

    vehicleIdGenerate = async () =>{
        if (!this.props.isUpdate){
            const res = await vehicleService.generateVehicleID();
            if (res.status===200){
                this.setState(Object.assign(this.state.formData, {registrationNumber: res.data.data}));
            }
        }
    }

    async componentDidMount() {
        await this.fetchRatesDataForSelect()
        await this.fetchVTypeDataForSelect()
        await this.vehicleIdGenerate()
        console.log('mount v')
        console.log(this.state.formData)

        console.log('type : ', this.props.obj)
    }

    handleSubmit = async () => {
        console.log("hi")
        if (this.state.file==null){
            this.setState({
                alert: true,
                message: "Please Select Image",
                severity: 'error'
            })
            return;
        }
        let formDate = this.state.formData
        if (this.props.isUpdate) {
            let res = await VehicleService.updateVehicle(formDate)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Vehicle Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'error'
                })
            }
        } else {
            let data = new FormData();
            data.append("vehicle", JSON.stringify(formDate));
            data.append("myFile", this.state.file)
            console.log(this.state.file)
            console.log(this.state.file.name)

            let res = await VehicleService.postVehicleIMG(data)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Vehicle Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: res.message,
                    severity: 'error'
                })
            }
        }
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "registrationNumber":
                const registrationNumber = event.target.value;
                this.setState(Object.assign(this.state.formData, {registrationNumber: registrationNumber}));
                // this.setState({ userId });
                break;

            case "brand":
                const brand = event.target.value;
                this.setState(Object.assign(this.state.formData, {brand: brand}));
                break;

            case "color":
                const color = event.target.value;
                this.setState(Object.assign(this.state.formData, {color: color}));
                break;

            case "noOfPassengers":
                const noOfPassengers = event.target.value;
                this.setState(Object.assign(this.state.formData, {noOfPassengers: noOfPassengers}));
                break;

            case "runningKm":
                const runningKm = event.target.value;
                this.setState(Object.assign(this.state.formData, {runningKm: runningKm}));
                break;

            case "fuelType":
                const fuelType = event.target.value;
                this.setState(Object.assign(this.state.formData, {fuelType: fuelType}));
                break;

            case "transmissionType":
                const transmissionType = event.target.value;
                this.setState(Object.assign(this.state.formData, {transmissionType: transmissionType}));
                break;

            case "rates":
                const rateId = event.target.value;
                this.setState(Object.assign(this.state.formData, {rates: {rateId: rateId}}));
                break;

            case "type":
                const vehicleTypeId = event.target.value;
                this.setState(Object.assign(this.state.formData, {type: {vehicleTypeId: vehicleTypeId}}));
                break;

            case "status":
                const status = event.target.value;
                this.setState(Object.assign(this.state.formData, {status: status}));
                break;
            default:
                break;
        }
    };

    handleFile(e) {
        let file = e.target.files[0]
        this.setState({
            file: file
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid container direction={'row'} xs={12} className={classes.container}>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={classes.validator}
                    >
                        <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                              alignContent={'center'}
                              className={classes.container}>
                            <Grid item container direction={'column'} xs={5.5} gap={'15px'}>
                                <TextValidator
                                    label="Registration Number"
                                    onChange={this.handleChange}
                                    name="registrationNumber"
                                    value={this.state.formData.registrationNumber}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    /*disabled={true}*/
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Brand"
                                    onChange={this.handleChange}
                                    name="brand"
                                    value={this.state.formData.brand}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Color"
                                    onChange={this.handleChange}
                                    name="color"
                                    value={this.state.formData.color}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="No of Passengers"
                                    onChange={this.handleChange}
                                    name="noOfPassengers"
                                    value={this.state.formData.noOfPassengers}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    type={"number"}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Running Km"
                                    onChange={this.handleChange}
                                    name="runningKm"
                                    value={this.state.formData.runningKm}
                                    validators={["required", ['isFloat']]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                            </Grid>
                            <Grid container direction={'column'} item xs={5.5} gap={'15px'}>

                                {/*<FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Fuel Type</InputLabel>
                            <Select
                                labelId="fuel"
                                id="fuelType"
                                value={this.state.formData.fuelType}
                                // onChange={handleChange}
                                label="fuel"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Petrol</MenuItem>
                                <MenuItem value={20}>Diesel</MenuItem>
                                <MenuItem value={20}>Electric</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Transmission Type </InputLabel>
                            <Select
                                labelId="transmission"
                                id="transmissionType"
                                value={this.state.formData.transmissionType}
                                // onChange={handleChange}
                                label="transmission"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Auto</MenuItem>
                                <MenuItem value={20}>Manual</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Rates </InputLabel>
                            <Select
                                labelId="rates"
                                id="rates"
                                value={this.state.formData.rates.rateId}
                                // onChange={handleChange}
                                label="rates"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Rate001</MenuItem>
                                <MenuItem value={20}>Rate002</MenuItem>
                                <MenuItem value={30}>Rate003</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Vehicle Type </InputLabel>
                            <Select
                                labelId="vehicleType"
                                id="type"
                                value={this.state.formData.type.vehicleTypeId}
                                // onChange={handleChange}
                                label="vehicleType"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>General</MenuItem>
                                <MenuItem value={20}>Premium</MenuItem>
                                <MenuItem value={20}>Luxury</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel>Status </InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                value={this.state.formData.status}
                                // onChange={handleChange}
                                label="Status"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Available</MenuItem>
                                <MenuItem value={20}>Under Maintains</MenuItem>
                                <MenuItem value={30}>Need Maintains</MenuItem>
                            </Select>
                        </FormControl>*/}
                                <TextValidator
                                    select
                                    label="Fuel Type"
                                    name="fuelType"
                                    onChange={this.handleChange}
                                    value={this.state.formData.fuelType}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={'Petrol'} value={'Petrol'}>Petrol</MenuItem>
                                    <MenuItem key={'Diesel'} value={'Diesel'}>Diesel</MenuItem>
                                    <MenuItem key={'Electric'} value={'Electric'}>Electric</MenuItem>
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Transmission Type"
                                    name="transmissionType"
                                    onChange={this.handleChange}
                                    value={this.state.formData.transmissionType}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={"Auto"} value={"Auto"}>Auto</MenuItem>
                                    <MenuItem key={"Manual"} value={"Manual"}>Manual</MenuItem>
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Rates"
                                    name="rates"
                                    onChange={this.handleChange}
                                    value={this.state.formData.rates.rateId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    {this.state.ratesData.map((option) => (
                                        <MenuItem key={option.rateId} value={option.rateId}>
                                            {option.rateId}
                                        </MenuItem>
                                    ))}
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Vehicle Type"
                                    name="type"
                                    onChange={this.handleChange}
                                    value={this.state.formData.type.vehicleTypeId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >

                                    {this.state.typeData.map((option) => (
                                        <MenuItem key={option.vehicleTypeId} value={option.vehicleTypeId}>
                                            {option.type}
                                        </MenuItem>
                                    ))}

                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Status"
                                    name="status"
                                    onChange={this.handleChange}
                                    value={this.state.formData.status}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={'Available'} value={'Available'}>Available</MenuItem>
                                    <MenuItem key={'Reserved'} value={'Reserved'}>Reserved</MenuItem>
                                    <MenuItem key={'Under Maintains'} value={'Under Maintains'}>Under
                                        Maintains</MenuItem>
                                    <MenuItem key={'Need Maintains'} value={'Need Maintains'}>Need Maintains</MenuItem>
                                </TextValidator>


                            </Grid>
                            <Grid container direction={'row'} xs={12} justifyContent={'center'}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<AddPhotoAlternateIcon className={classes.icon}/>}
                                    sx={{marginRight: "1rem"}}
                                    className={classes.btnUpload}
                                >
                                    Upload Image
                                    <input type="file" accept="image/*" hidden onChange={(e) => this.handleFile(e)}/>
                                </Button>
                            </Grid>
                            <CommonButton
                                size="large"
                                variant="contained"
                                label={this.props.isUpdate ? 'Update' : 'Add'}
                                type="submit"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                                style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                            />
                        </Grid>
                    </ValidatorForm>
                </Grid>
                <CustomSnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />
            </>
        );
    }
}

export default withStyles(styleSheet)(AddNewVehicle);
