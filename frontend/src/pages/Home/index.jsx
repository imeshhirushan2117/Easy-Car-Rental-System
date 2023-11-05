import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import HeroWithGrid from "../../components/Hero/withGrid";
import ListVehicle from "../../components/ListVehicle";
import Footer from "../../components/Footer";
import LoginUser from "../Session/Login/user";
import LoginAdmin from "../Session/Login/admin";
import LoginDriver from "../Session/Login/driver";
import { Grid } from "@mui/material";

class Home extends Component {
  render() {
    return (
      // overflowX:'hidden'
      <Grid container>
        <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
          <NavBar />
          <HeroWithGrid />
          {/*<ListVehicle />*/}
          <Footer />
          {/* <LoginUser/>  */}

          {/* <LoginAdmin/>
                <LoginDriver/> */}
        </div>
      </Grid>
    );
  }
}

export default Home;
