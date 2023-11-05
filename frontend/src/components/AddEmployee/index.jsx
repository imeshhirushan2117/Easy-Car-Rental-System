import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import EmployeeService from "../../services/EmployeeService";
import CustomSnackBar from "../common/SnakBar";
import vehicleService from "../../services/VehicleService";


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                staffId: props.isUpdate ? props.obj.staffId : '',
                name: props.isUpdate ? props.obj.name : '',
                address: props.isUpdate ? props.obj.address : '',
                mobileNo: props.isUpdate ? props.obj.mobileNo : '',
                email: props.isUpdate ? props.obj.email : '',
                password: props.isUpdate ? props.obj.password : '',
                type: props.isUpdate ? props.obj.type : 'Admin',
            },
            alert: false,
            message: '',
            severity: ''
        };
    }

    employeeIdGenerate = async () =>{
        if (!this.props.isUpdate){
            const res = await EmployeeService.generateStaffID();
            if (res.status===200){
                this.setState(Object.assign(this.state.formData, {staffId: res.data.data}));
            }
        }
    }

    async componentDidMount(){
        await this.employeeIdGenerate();
    }

    handleSubmit = async () => {
        let formData = this.state.formData
        if (this.props.isUpdate) {
            let res = await EmployeeService.updateEmployee(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Employee Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Employee Update Unsuccessful!',
                    severity: 'error'
                })
            }
        } else {
            let res = await EmployeeService.postEmployee(formData)
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Employee Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Employee Saved Unsuccessful!',
                    severity: 'error'
                });
            }
        }

    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "staffId":
                const staffId = event.target.value;
                this.setState(Object.assign(this.state.formData, {staffId: staffId}));
                // this.setState({ userId });
                break;

            case "name":
                const name = event.target.value;
                this.setState(Object.assign(this.state.formData, {name: name}));
                break;

            case "address":
                const address = event.target.value;
                this.setState(Object.assign(this.state.formData, {address: address}));
                break;

            case "mobileNo":
                const mobileNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {mobileNo: mobileNo}));
                break;

            case "email":
                const email = event.target.value;
                this.setState(Object.assign(this.state.formData, {email: email}));
                break;

            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;

            case "type":
                const type = event.target.value;
                this.setState(Object.assign(this.state.formData, {type: type}));
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
                                    label="Employee ID"
                                    onChange={this.handleChange}
                                    name="staffId"
                                    value={this.state.formData.staffId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    /*disabled={true}*/
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Name"
                                    onChange={this.handleChange}
                                    name="name"
                                    value={this.state.formData.name}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Address"
                                    onChange={this.handleChange}
                                    name="address"
                                    value={this.state.formData.address}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                    name="mobileNo"
                                    value={this.state.formData.mobileNo}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.formData.email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["This field is required", "Email is not valid"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    type={"password"}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Type"
                                    onChange={this.handleChange}
                                    name="type"
                                    disabled={true}
                                    value={this.state.formData.type}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
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

export default withStyles(styleSheet)(AddEmployee);
