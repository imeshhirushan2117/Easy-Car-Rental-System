import React, {Component} from 'react';
import {Button, Grid, IconButton, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CommonButton from "../common/Button";
import CustomSnackBar from "../common/SnakBar";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import CustomerService from "../../services/CustomerService";

class RegisterCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                regUserId: '',
                name: '',
                nicNo: '',
                address: '',
                mobileNo: '',
                drivingLicenseNo: '',
                email: '',
                password: '',
            }, verification: null, alert: false, message: '', severity: '',
        }
    }

    customerIdGenerate = async () => {

        const res = await CustomerService.generateCustomerID();
        if (res.status === 200) {
            this.setState(Object.assign(this.state.formData, {regUserId: res.data.data}));
        }

    }

    async componentDidMount() {
        await this.customerIdGenerate();
    }

    handleSubmit = async () => {
        if (this.state.verification === null) {
            this.setState({
                alert: true,
                message: "Please Upload NIC Card Or Driving License Card Photo to Verify",
                severity: 'error'
            })
            return;
        }
        let formData = this.state.formData
        let data = new FormData();
        data.append("customer", JSON.stringify(formData));
        data.append("file", this.state.verification)

        let res = await CustomerService.postCustomer(data)
        if (res.status === 201) {
            this.setState({
                alert: true,
                message: "Registration Done",
                severity: 'success'
            })
            this.setState({
                formData: {
                    regUserId: '',
                    name: '',
                    nicNo: '',
                    address: '',
                    mobileNo: '',
                    drivingLicenseNo: '',
                    email: '',
                    password: '',
                }
            })
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            })
        }
    }

    handleFile(e) {
        let verification = e.target.files[0]
        this.setState({
            verification: verification
        })
    }

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "regUserId":
                const regUserId = event.target.value;
                this.setState(Object.assign(this.state.formData, {regUserId: regUserId}));
                // this.setState({ userId });
                break;

            case "name":
                const name = event.target.value;
                this.setState(Object.assign(this.state.formData, {name: name}));
                break;

            case "nicNo":
                const nicNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {nicNo: nicNo}));
                break;

            case "drivingLicenseNo":
                const drivingLicenseNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {drivingLicenseNo: drivingLicenseNo}));
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

            default:
                break;
        }
    };


    render() {
        const {classes} = this.props;
        return (<>
            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}
                  className={'bg-white h-screen'}>
                <Grid container direction={'column'}
                      className={'bg-white w-max rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'}
                      justifyContent={'center'}>
                    <Grid container direction={"row"} justifyContent={"center"}>
                        <Grid container item xs={12} justifyContent={"center"} className={'pt-20 sm:pt-10'}>
                            <Link to={'/'} className={'pt-20 sm:pt-10'}>
                                <IconButton aria-label="delete" size="large">
                                    <HomeIcon fontSize="inherit"/>
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid>
                            <Typography variant={"h5"} textAlign={"center"}>
                                Customer Registration Form
                            </Typography>
                        </Grid>

                    </Grid>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={"flex justify-center p-10"}
                    >
                        <Grid container item gap={2} xs={12} justifyContent={"center"}>
                            <Grid container direction={'column'} item gap={2} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="User ID"
                                    onChange={this.handleChange}
                                    name="regUserId"
                                    value={this.state.formData.regUserId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    /*disabled={true}*/
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Name"
                                    onChange={this.handleChange}
                                    name="name"
                                    value={this.state.formData.name}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="NIC"
                                    onChange={this.handleChange}
                                    name="nicNo"
                                    value={this.state.formData.nicNo}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Driving License No."
                                    onChange={this.handleChange}
                                    name="drivingLicenseNo"
                                    value={this.state.formData.drivingLicenseNo}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                            </Grid>
                            <Grid container direction={'column'} item gap={2} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="Address"
                                    onChange={this.handleChange}
                                    name="address"
                                    value={this.state.formData.address}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Mobile No."
                                    onChange={this.handleChange}
                                    name="mobileNo"
                                    value={this.state.formData.mobileNo}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.formData.email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["This field is required", "Email is not valid"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    type={'password'}
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                /></Grid>
                            <Grid container direction={'row'} xs={10.5} justifyContent={'center'}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<AddPhotoAlternateIcon className={classes.icon}/>}
                                    sx={{marginRight: "1rem"}}
                                    className={classes.btnUpload}
                                >
                                    Upload NIC Card or Driving License Card image
                                    <input type="file" accept="image/*" hidden
                                           onChange={(e) => this.handleFile(e)}/>
                                </Button>
                            </Grid>
                            <CommonButton
                                size="large"
                                variant="contained"
                                label='Sign Up'
                                type="submit"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                                style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                            />
                        </Grid>
                    </ValidatorForm>
                </Grid>
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

export default withStyles(styleSheet)(RegisterCustomer);
