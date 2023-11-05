import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import CustomSnackBar from "../common/SnakBar";
import VehicleReatsService from "../../services/VehicleReatsService";
import vehicleService from "../../services/VehicleService";
import vehicleRates from "../../pages/Admin/Vehicle Rates";


class AddVehicleRates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "rateId": props.isUpdate ? props.obj.rateId : '',
                "monthlyRate": props.isUpdate ? props.obj.monthlyRate : '',
                "dailyRate": props.isUpdate ? props.obj.dailyRate : '',
                "freeKmForaMonth": props.isUpdate ? props.obj.freeKmForaMonth : '',
                "freeKmForaDay": props.isUpdate ? props.obj.freeKmForaDay : '',
                "pricePerExtraKm": props.isUpdate ? props.obj.pricePerExtraKm : '',
            },
            alert: false,
            message: '',
            severity: ''
        };
    }

    ratesIdGenerate = async () =>{
        if (!this.props.isUpdate){
            const res = await VehicleReatsService.generateRatesID();
            if (res.status===200){
                this.setState(Object.assign(this.state.formData, {rateId: res.data.data}));
            }
        }
    }

    async componentDidMount() {
        await this.ratesIdGenerate()
    }

    handleSubmit = async () => {
        let formData = this.state.formData;
        if (this.props.isUpdate) {
            let res = await VehicleReatsService.updateRates(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Rates Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Rates Update Unsuccessful!',
                    severity: 'error'
                });
            }
        } else {
            let res = await VehicleReatsService.postRates(formData)
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Rates Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Rates Saved Unsuccessful!',
                    severity: 'error'
                });
            }
        }
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "rateId":
                const rateId = event.target.value;
                this.setState(Object.assign(this.state.formData, {rateId: rateId}));
                // this.setState({ userId });
                break;

            case "monthlyRate":
                const monthlyRate = event.target.value;
                this.setState(Object.assign(this.state.formData, {monthlyRate: monthlyRate}));
                break;

            case "dailyRate":
                const dailyRate = event.target.value;
                this.setState(Object.assign(this.state.formData, {dailyRate: dailyRate}));
                break;

            case "freeKmForaMonth":
                const freeKmForaMonth = event.target.value;
                this.setState(Object.assign(this.state.formData, {freeKmForaMonth: freeKmForaMonth}));
                break;

            case "freeKmForaDay":
                const freeKmForaDay = event.target.value;
                this.setState(Object.assign(this.state.formData, {freeKmForaDay: freeKmForaDay}));
                break;

            case "pricePerExtraKm":
                const pricePerExtraKm = event.target.value;
                this.setState(Object.assign(this.state.formData, {pricePerExtraKm: pricePerExtraKm}));
                break;

            default:
                break;
        }
    };

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
                            <Grid item container direction={'column'} xs={12} gap={'15px'}>
                                <TextValidator
                                    label="Rate ID"
                                    onChange={this.handleChange}
                                    name="rateId"
                                    value={this.state.formData.rateId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    /*disabled={true}*/
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Daily Rate"
                                    onChange={this.handleChange}
                                    name="dailyRate"
                                    value={this.state.formData.dailyRate}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Free Km For a Day"
                                    onChange={this.handleChange}
                                    name="freeKmForaDay"
                                    value={this.state.formData.freeKmForaDay}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Free Km For a Month"
                                    onChange={this.handleChange}
                                    name="freeKmForaMonth"
                                    value={this.state.formData.freeKmForaMonth}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Monthly Rate"
                                    onChange={this.handleChange}
                                    name="monthlyRate"
                                    value={this.state.formData.monthlyRate}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Price Per Extra Km"
                                    onChange={this.handleChange}
                                    name="pricePerExtraKm"
                                    value={this.state.formData.pricePerExtraKm}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <CommonButton
                                    size="large"
                                    variant="contained"
                                    label={this.props.isUpdate ? 'Update' : 'Add'}
                                    type="submit"
                                    className="text-white bg-blue-500 font-bold tracking-wide"
                                    style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                                />
                            </Grid>
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
            </>);

    }
}

export default withStyles(styleSheet)(AddVehicleRates);
