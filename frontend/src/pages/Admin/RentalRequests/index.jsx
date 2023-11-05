import React, {Component} from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import Sidebar from "../../../components/common/Sidebar";
import Navbar from "../../../components/common/Navbar/Admin";
import CommonDataTable from "../../../components/common/Table";
import CloseIcon from "@mui/icons-material/Close";
import AddDriver from "../../../components/AddDriver";
import CustomSnackBar from "../../../components/common/SnakBar";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerService from "../../../services/CustomerService";

import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';

class RentalRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "regUserId",
                    headerName: "Booking ID",
                    width: 175,
                },

                {
                    field: "name",
                    headerName: "Registration Number",
                    width: 175,
                },

                {
                    field: "address",
                    headerName: "Rent Date",
                    width: 175,
                },

                {
                    field: "mobileNo",
                    headerName: "Return Date",
                    width: 175,
                },

                {
                    field: "nicNo",
                    headerName: "Slip Link",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "email",
                    headerName: "Driver",
                    width: 175,
                },

                {
                    field: "password",
                    headerName: "Booking ID",
                    width: 175,
                },

                {
                    field: "drivingLicenseNo",
                    headerName: "Status",
                    width: 175,
                    renderCell:(params)=>{
                        return(
                            <>
                                <Typography variant={'span'} className={'p-1 px-4 rounded-2xl bg-orange-200 border border-orange-500 font-medium'}>
                                    Pending
                                </Typography>
                            </>
                        )
                    }
                },


                {
                    field: "Action",
                    headerName: "Action",
                    width: 175,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Accept Request">
                                    <IconButton className={'bg-green-100 mr-2'} onClick={async () => {
                                        await this.deleteUser(params.row.regUserId);
                                    }}>
                                        <CheckIcon className={'text-green-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Deny Request">
                                    <IconButton className={'bg-red-100 mr-2 '} onClick={async () => {
                                        await this.deleteUser(params.row.regUserId);
                                    }}>
                                        <CloseIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="View Details">
                                    <IconButton className={'bg-blue-100 '} onClick={async () => {
                                        await this.deleteUser(params.row.regUserId);
                                    }}>
                                        <VisibilityIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    deleteUser = async (id) => {

        let params = {
            regUserId: id,
        }
        let res = await CustomerService.deleteCustomers(params)
        console.log(res)
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadUserData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }

    async loadUserData() {
        let resp = await CustomerService.fetchCustomers();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.regUserId;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
    }

    componentDidMount() {
        this.loadUserData();
        console.log("Mounted");
    }

    render() {
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
                                style={{height: "700px"}}
                            >
                                <CommonDataTable
                                    columns={this.state.columns}
                                    rows={this.state.data}
                                    rowsPerPageOptions={5}
                                    pageSize={10}
                                    // checkboxSelection={true}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    // classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                Add New Employee
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddDriver/>
                    </DialogContent>
                </Dialog>
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
            </>
        );
    }
}

export default RentalRequests;