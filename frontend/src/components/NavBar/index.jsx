import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Dialog, DialogContent, DialogTitle } from "@mui/material";
import CommonButton from "../common/Button";
import LoginUser from "../../pages/Session/Login/user";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar color="transparent" position={"fixed"}>
        <nav className="flex justify-between items-center h-16 px-12 bg-zinc-800 p-10 backdrop-blur-sm">
          <div>
            <Typography
              variant={"h5"}
              className="text-white font-dosis font-bold tracking-wide select-none"
            >
              Easy Car Rental
            </Typography>
          </div>
          <div className="flex w-1/12 justify-end gap-3">
            <CommonButton
              size="large"
              variant="outlined"
              label="Login"
              className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => this.setState({ open: true })}
            />
          </div>
        </nav>
        {/* <DialogBox title={"Login"} divider open={this.setState}></DialogBox> */}
        {/* ----  Popup Dialog  ---- */}

        <Dialog
          open={this.state.open}
          maxWidth="md"
          classes={{ paper: classes.dialogWraper }}
          className="flex gap-6 flex-col h-fit w-96 rounded-xl bg-blue-300 p-10 m-5 md:m-0 bg-opacity-10  backdrop-blur-sm"
        >
          <DialogTitle style={{ paddingRight: "0px" }}>
            <div style={{ display: "flex" }}>
              <Typography
                variant="h4"
                component="div"
                className="font-bold flex-grow"
                style={{ flexGrow: 1 }}
              >
                Login
              </Typography>

              <IconButton onClick={() => this.setState({ open: false })}>
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <LoginUser />
          </DialogContent>
        </Dialog>
      </AppBar>
    );
  }
}

export default withStyles(styleSheet)(NavBar);
