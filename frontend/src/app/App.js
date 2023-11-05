import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import NotFound from '../pages/Session/NotFound'
import LoginAdmin from "../pages/Session/Login/admin";
import LoginDriver from "../pages/Session/Login/driver";
import VehicleManage from "../pages/Admin/Vehicle Manage";
import AddNewVehicle from "../components/AddVehicle";
import VehicleType from "../pages/Admin/Vehicle Types";
import VehicleRates from "../pages/Admin/Vehicle Rates";
import DriverManage from "../pages/Admin/Driver Manage";
import EmployeeManage from "../pages/Admin/Employee Manage";
import CustomerManage from "../pages/Admin/Customer Manage";
import ViewAllVehicles from "../pages/ViewAllVehicles";
import DetailsOfAVehicle from "../pages/DetailsOfAVehicle";
import RentalRequests from "../pages/Admin/RentalRequests";
import RegisterCustomer from "../components/RegisterCustomer";
import ListVehicle from "../components/ListVehicle";


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/vehicles" element={<ViewAllVehicles/>}/>
            <Route path="/vehicles/:regNumber" element={<DetailsOfAVehicle/>}/>
            <Route path="/register" element={<RegisterCustomer/>}/>
            <Route path="/available" element={<ListVehicle/>}/>

            <Route path="admin">
                <Route index element={<LoginAdmin/>}/>
                <Route path="dashboard">
                    <Route index element={<Dashboard/>}/>
                    <Route path="rentalrequests" element={<RentalRequests/>}/>
                    <Route path="vehiclemanage" element={<VehicleManage/>}/>
                    <Route path="vehiclerates" element={<VehicleRates/>}/>
                    <Route path="vehicletype" element={<VehicleType/>}/>
                    <Route path="drivermanage" element={<DriverManage/>}/>
                    <Route path="employeemanage" element={<EmployeeManage/>}/>
                    <Route path="customermanage" element={<CustomerManage/>}/>
                    <Route path="test" element={<AddNewVehicle/>}/>
                </Route>
            </Route>

            <Route path="driver">
                <Route index element={<LoginDriver/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
