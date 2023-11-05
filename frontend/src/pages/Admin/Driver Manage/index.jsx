import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddDriver from "../../../components/AddDriver";
import DriverService from "../../../services/DriverService";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CustomSnackBar from "../../../components/common/SnakBar";


class DriverManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            updateDriver: {},
            isUpdate: false,

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "driverId",
                    headerName: "Driver Id",
                    width: 200,
                },

                {
                    field: "name",
                    headerName: "Name",
                    width: 200,
                },

                {
                    field: "address",
                    headerName: "Address",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "mobileNo",
                    headerName: "Mobile No.",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "email",
                    headerName: "Email",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "password",
                    headerName: "Password",
                    width: 200,
                    sortable: false,
                    renderCell:(params) => {
                        return(
                            <>
                                <span style={{'-webkit-text-security': 'disc'}} >{params.row.password}</span>
                            </>
                        )
                    }
                },

                {
                    field: "status",
                    headerName: "Status",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "action",
                    headerName: "Action",
                    width: 200,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton className={'bg-blue-100 mr-2 '} onClick={async () => {
                                        await this.updateDriver(params.row);
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton className={'bg-red-100 mr-2 '} onClick={async () => {
                                        await this.deleteDriver(params.row.driverId);
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.popup == true){
            this.loadData()
        }
    }

    deleteDriver = async (id) => {
        let params = {
            driverId: id
        }
        let res = await DriverService.deleteDriver(params);
        console.log(res)
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }
    updateDriver = async (data) => {
        const row = data;
        let updateDrivers = {
            driverId: row.driverId,
            name: row.name,
            address: row.address,
            mobileNo: row.mobileNo,
            email: row.email,
            password: row.password,
            status: row.status
        }

        /*let {updateDriver} = this.state;
        updateDriver.push(updateDrivers);*/
        await this.setState({updateDriver: updateDrivers});
        await this.setState({
            popup: true,
            isUpdate: true
        })

    }

    async loadData() {
        let resp = await DriverService.fetchDrivers();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.driverId;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
        // console.log(this.state.data);
        // console.log(this.state.data);
        /*this.state.data.map((value, index)=>{
            console.log(index)
            console.log(value)
        })*/

    }

    componentDidMount() {
        this.loadData()

        console.log("Mounted");
    }

    popupCloseBtn = () => {
        this.setState({popup: false})
    }

    render() {
        const {classes} = this.props;

        return (
            <>
                <Grid container direction={"row"} columns="12">
                    <Grid item xs={"auto"}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs className="">
                        <Navbar/>
                        <Grid container item xs={"auto"} className="flex p-5 gap-5">
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                                <CommonButton
                                    variant="outlined"
                                    label="Add Driver"
                                    onClick={() => this.setState({popup: true, isUpdate: false})}
                                    startIcon={<AddIcon/>}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                                style={{height: "700px"}}
                            >
                                <CommonDataTable
                                    columns={this.state.columns}
                                    rows={this.state.data}
                                    rowsPerPageOptions={10}
                                    pageSize={10}
                                    // getRowId={row=>row.driverId}
                                    // checkboxSelection={true}
                                />
                            </Grid>
                        </Grid>
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

                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                {this.state.isUpdate ? 'Update' : 'Add'} Driver
                            </Typography>

                            <IconButton onClick={this.popupCloseBtn}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <AddDriver isUpdate={this.state.isUpdate} obj={this.state.updateDriver}
                            /* parentCloseBtn={this.popupCloseBtn} tblUpdate={this.loadData()}*//>
                    </DialogContent>
                </Dialog>

            </>
        );
    }
}

export default withStyles(styleSheet)(DriverManage);
