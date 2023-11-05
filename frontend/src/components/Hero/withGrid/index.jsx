import React, {Component} from "react";
import {styled, TextField, Grid, DialogTitle, DialogContent, Dialog} from "@mui/material";
import Typography from "@mui/material/Typography";
import CommonButton from "../../common/Button";

import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Link} from "react-router-dom";
import ListVehicle from "../../ListVehicle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoginUser from "../../../pages/Session/Login/user";


const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#EAB308",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            'rgba(0, 0, 0, 0.23)': "#AAAAAA",
        },
        "&:hover fieldset": {
            'rgba(0, 0, 0, 0.23)': "white",
        },
        "&.Mui-focused fieldset": {
            'rgba(0, 0, 0, 0.23)': "White",
        },
    },
    "& .MuiOutlinedInput-root input": {
        color: "White",
    },
    "& label": {
        color: "#AAAAAA",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        borderColor: 'gray'
    },
    "&:hover .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        borderColor: '#EAB308'
    },
});

class HeroWithGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            navBar: false,
            selectedRentDate: new Date(),
            selectedReturnDate: new Date(),

        };
    }

    // md:text-6xl
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className="h-screen bg-hero-pattern bg-no-repeat bg-bottoms bg-cover bg-center bg-blend-overlay  bg-stone-800"
            >
                <Grid item xs={12} sm={12} md={5} lg={6}>
                    <Typography
                        variant={"h4"}
                        className="text-white font-bold select-none md:text-7xl lg:text-left lg:text-7xl xl:text-7xl tracking-wide"
                        align="center"
                    >
                        <span className="text-blue-500">Easy Car Rental</span>
                        <br/> <span>Choice your Favourite</span>
                    </Typography>
                </Grid>

                <Grid
                    container
                    item
                    xs={12}
                    md={3.5}
                    lg={2.8}
                    justifyContent="center"
                    alignItems="center"
                >
                    <div
                        className="flex gap-6 flex-col h-fit w-96 rounded-xl bg-blue-300 p-10 m-5 md:m-0 bg-opacity-10  backdrop-blur-sm"
                        style={{border: "1px solid rgba(255, 255, 255, 0.09)"}}
                    >
                        {/*<CssTextField
              id="outlined-basic"
              label="Rent Date"
              variant="outlined"
              borderBottomColor="warning"
              className="text-white placeholder-orange-500"
            />
            <CssTextField
              id="outlined-basic"
              label="Return Date"
              variant="outlined"
            />*/}
                        {/* <CssTextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            /> */}
                        {/*<LocalizationProvider dateAdapter={AdapterMoment}>
              <DesktopDatePicker
                  disablePast={true}
                  showToolbar={false}
                  label="Rent Date"
                  inputFormat="MM/D/yyyy"
                  value={this.state.selectedDate}
                  onChange={this.handleChangeDate}
                  renderInput={(params) => <CssTextField {...params} />}

              />
              <DesktopDatePicker
                  disablePast={true}
                  showToolbar={false}
                  label="Return Date"
                  inputFormat="MM/D/yyyy"
                  value={this.state.selectedReturnDate}
                  onChange={this.handleChangeDate}
                  renderInput={(params) => <CssTextField {...params} />}

              />
            </LocalizationProvider>*/}

                        {/*<CommonButton
                            size="large"
                            variant="outlined"
                            label="Login"
                            className="text-white border-white hover:bg-white hover:text-black"
                            onClick={() => this.setState({ open: true })}
                        />*/}
                        <Link to="driver">
                            <CommonButton
                                size="large"
                                variant="contained"
                                label="If you are a Driver"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                            />
                        </Link>
                    </div>
                    <div
                        className="flex gap-6 flex-col h-fit w-96"
                        style={{width: "100%", justifyContent: "center", alignItems: "center", marginTop: "20px"}}
                    >
                        <Link to="/available">
                            <CommonButton
                                size="large"
                                variant="contained"
                                label="Available Cars >>"
                                className="text-white bg-orange-500 font-bold tracking-wide"
                            />
                        </Link>
                    </div>
                </Grid>

            </Grid>
        );
    }

    handleChangeDate = (newValue) => {
        this.setState({
            selectedDate: newValue
        })
    }
}

export default HeroWithGrid;
