import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import DriverService from "../../services/DriverService";
import CustomSnackBar from "../common/SnakBar";
import vehicleService from "../../services/VehicleService";


class AddDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                driverId: props.isUpdate ? props.obj.driverId : '',
                name: props.isUpdate ? props.obj.name : '',
                address: props.isUpdate ? props.obj.address : '',
                mobileNo: props.isUpdate ? props.obj.mobileNo : '',
                email: props.isUpdate ? props.obj.email : '',
                password: props.isUpdate ? props.obj.password : '',
                status: props.isUpdate ? props.obj.status : 'Available',
            },
            alert: false,
            message: '',
            severity: ''

        };
    }

    /*static getDerivedStateFromProps(props,state){
        console.log(props)
        return{
            driverId:props.obj.driverId,
            name: props.obj.name,
            address:props.obj.address,
            mobileNo:props.obj.mobileNo,
            email:props.obj.email,
            password:props.obj.password,
            status:props.obj.status
        };
    }*/

    driverIdGenerate = async () =>{
        if (!this.props.isUpdate){
            const res = await DriverService.generateDriverID();
            if (res.status===200){
                this.setState(Object.assign(this.state.formData, {driverId: res.data.data}));
            }
        }
    }

    async componentDidMount(){
        await this.driverIdGenerate();
    }

    handleSubmit = async () => {
        let formData = this.state.formData;
        if (this.props.isUpdate) {
            console.log("Hi handle update");
            let res = await DriverService.updateDriver(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Driver Updated!',
                    severity: 'success'
                });
                // this.props.parentCloseBtn()
                // this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: 'Driver Update Unsuccessful!',
                    severity: 'error'
                });
            }

        } else {
            console.log("Hi handle add");
            console.log(this.state.formData);
            // let formData = this.state.formData;
            let res = await DriverService.postDriver(formData)
            console.log(res)

            if (res.status === 201) {
                await this.setState({
                    alert: true,
                    message: 'Driver Saved!',
                    severity: 'success'
                });

                // this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: 'Driver Saved Unsuccessful!',
                    severity: 'error'
                });
            }
        }
        // this.props.tblUpdate()
    };

   /* componentWillUnmount() {
        this.props.parentCloseBtn()
    }*/

    clearFields = () => {
        this.setState({
            driverId: "",
            name: "",
            address: "",
            mobileNo: "",
            email: "",
            password: "",
            status: "Available"
        })
    }

    handleChange = (event) => {
        let id = event.target.name;

        switch (id) {
            case "driverId":
                const driverId = event.target.value;
                this.setState(Object.assign(this.state.formData, {driverId: driverId}));
                // this.setState({ userId });
                break;
            case "name":
                const name = event.target.value;
                this.setState(Object.assign(this.state.formData, {name: name}));
                // this.setState({ userId });
                break;
            case "address":
                const address = event.target.value;
                this.setState(Object.assign(this.state.formData, {address: address}));
                // this.setState({ userId });
                break;
            case "mobileNo":
                const mobileNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {mobileNo: mobileNo}));
                // this.setState({ userId });
                break;
            case "email":
                const email = event.target.value;
                this.setState(Object.assign(this.state.formData, {email: email}));
                // this.setState({ userId });
                break;
            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;
            case "status":
                const status = event.target.value;
                this.setState(Object.assign(this.state.formData, {status: status}));
                break;

            default:
                break;
        }
    };

    /*  componentDidMount() {
          let {driverO} = this.props;
          let {isUpdate} = this.props;

          if (isUpdate) {
              /!*this.setState({
                  driverId: driverO.driverId,
                  name: driverO.name,
                  address: driverO.address,
                  mobileNo: driverO.mobileNo,
                  email: driverO.email,
                  password: driverO.password,
                  status: driverO.status,
              })*!/
              console.log(this.state.formData)
              console.log(this.state.driverO)
          }

      }*/


    render() {

        const {classes} = this.props;

        return (
            <>
                <Grid container direction={'row'} xs={12} className={classes.container}>
                    <ValidatorForm
                        useref={"form"}
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={classes.validator}
                    >
                        <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                              alignContent={'center'}
                              className={classes.container}>
                            <Grid item container direction={'column'} xs={12} gap={'15px'}>
                                <TextValidator
                                    label="Driver ID"
                                    onChange={this.handleChange}
                                    name="driverId"
                                    value={this.state.formData.driverId}
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
                                    label="Status"
                                    onChange={this.handleChange}
                                    name="status"
                                    value={this.state.formData.status}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    disabled={true}
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

export default withStyles(styleSheet)(AddDriver);
