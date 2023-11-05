import {AppBar, Badge, IconButton} from "@mui/material";
import React, {Component} from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      date:new Date().toLocaleDateString(),
      time:new Date().toLocaleTimeString()
    }
  }
  componentDidMount() {
    let date = new Date().toLocaleDateString();
    console.log(date)
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  tick(){
    this.setState({
      date:new Date().toLocaleDateString(),
      time:new Date().toLocaleTimeString()

    })
  }

  render() {
    return (
      <AppBar color="transparent" className="relative shadow-none">
        <nav className="h-12 justify-end border-b-2 flex items-center text-sm bg-white text-gray-600">
          <div className="flex p-5  items-center justify-end w-full h-full">
            <div className="flex items-center mr-5 text-sm">{this.state.date}</div>
            <div className="flex items-center mr-5 text-sm">{this.state.time}</div>
            {/*<IconButton size="large" className="mr-5">
              <Badge
                badgeContent={4}
                color="error"
                className="flex items-center text-sm"
              >
                <NotificationsNoneOutlinedIcon color="action" />
              </Badge>
            </IconButton>*/}
            {/* <IconButton size="large" className="mr-5"
            >
              <AccountCircleIcon />
            </IconButton> */}
          </div>
        </nav>
      </AppBar>
    );
  }
}
export default Navbar;
