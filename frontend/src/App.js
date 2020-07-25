import React from "react";
import "./App.css";
import DashboardLayout from "./components/dashboard-components/DashboardLayout";
import DashboardLogin from "./components/admin-components/DashboardLogin";
import EditAdminUser from "./components/dashboard-components/components/EditAdminUser";
import AddAccount from "./components/admin-components/AddAccount";
import AdminUserList from "./components/admin-components/AdminUserList";
import AddPlace from "./components/dashboard-components/components/AddPlace"

function App() {
    return (
        <div className="App">

            <DashboardLayout/>

        </div>
    );
}

export default App;
