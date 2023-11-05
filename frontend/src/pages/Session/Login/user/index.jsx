import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../../../../components/common/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {Link} from "react-router-dom";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: "",
        password: "",
      },
    };
  }

  handleSubmit = async () => {
    console.log("Hi handle");
    console.log(this.state.formData);
  };

  handleChange = (event) => {
    let id = event.target.name;
    switch (id) {
      case "userName":
        const userName = event.target.value;
        this.setState(
          Object.assign(this.state.formData, { userName: userName })
        );
        // this.setState({ userId });
        break;

      case "password":
        const password = event.target.value;
        this.setState(
          Object.assign(this.state.formData, { password: password })
        );
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Grid
        container
        direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        className="h-screen w-screen bg-red-200"
      >
        <Grid container direction={"column"} alignItems="center">
          <Grid
            item
            container
            className="min-h-96  w-96 bg-slate-50 rounded-lg p-10 drop-shadow-lg"
          >
            <Grid container item direction={"column"} gap="20px" className="">
              {/* <Grid item>
                <Typography
                  variant="h4"
                  className="text-center uppercase font-bold"
                >
                  Login
                </Typography>
              </Grid> */}
              <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <Grid item container direction={"column"} alignItems rowGap="20px">
                  <TextValidator
                    label="User Name"
                    onChange={this.handleChange}
                    name="userName"
                    value={this.state.formData.regUserId}
                    validators={["required"]}
                    errorMessages={["This field is required"]}
                    className="w-full"
                    style={{minWidth:'100%'}}
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
                    style={{minWidth:'100%'}}
                  />
                  <Typography variant="p" className="text-slate-500 -mt-3">
                    Frogot password ?
                  </Typography>
                  <CommonButton
                    size="large"
                    variant="contained"
                    label="Login"
                    type="submit"
                    className="text-white bg-blue-500 font-bold tracking-wide" style={{backgroundColor:'rgba(25, 118, 210, 0.95)'}}
                  />

                  <Typography variant="p">
                    You are not a member? <Link to={'/register'}> Register Now</Link>
                  </Typography>
                </Grid>
              </ValidatorForm>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default LoginUser;
