import React, {Component} from 'react';
import {Grid, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CommonButton from "../../Button";

class NavBarVehicle extends Component {
    render() {
        return (
            <Grid container item xs={12} justifyContent={'space-around'} alignItems={'center'} gap={'10px'}
                  className={'p-5 bg-stone-900'}>
                <Typography
                    variant={"h5"}
                    className="text-white font-dosis font-bold tracking-wide select-none"
                >
                    Easy Car Rental
                </Typography>
                <Grid container justifyContent={'center'} item xs={6} gap={'5px'}>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        // value={values.weight}
                        // onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        className={'text-black bg-white'}
                        style={{width: '70%'}}
                    />
                    <CommonButton
                        size="large"
                        variant="outlined"
                        label="Search"
                        className="bg-blue-500 text-white hover:bg-blue-600"
                        // onClick={() => this.setState({ open: true })}
                    />
                </Grid>
                <CommonButton
                    size="large"
                    variant="outlined"
                    label="Profile"
                    className="text-white hover:bg-white hover:text-black "
                    // onClick={() => this.setState({ open: true })}
                />
            </Grid>
        );
    }
}

export default NavBarVehicle;