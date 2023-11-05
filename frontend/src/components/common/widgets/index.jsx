import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

class Widget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, path, number } = this.props;
    return (
      <div className="flex w-64 justify-between p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl h-28">
        <div className="flex flex-col justify-between">
          <Typography
            variant="h6"
            component={"span"}
            className="font-bold text-sm text-gray-500 uppercase"
          >
            {type}{" "}
            {/* <Typography variant="caption" component={"span"} className='capitalize'>
              {'/ '+number}
            </Typography> */}
          </Typography>
          <Typography
            variant="subtitle1"
            component={"span"}
            className="text-3xl font-light"
          >
            {number}
          </Typography>
          <Link to={path}>
            <Typography
              variant="body2"
              component={"span"}
              className="text-xs border-solid border-gray-500 border-b w-max"
            >
              See all {type}
            </Typography>
          </Link>
        </div>
        <div className="flex flex-col justify-end">
          <PeopleIcon className="p-1 bg-red-400 bg-opacity-50 rounded" />
        </div>
      </div>
    );
  }
}
export default Widget;
