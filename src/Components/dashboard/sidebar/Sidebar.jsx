import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import {Link} from "react-router-dom";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar"> 
    <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>

     <span className="logo">Wastegram</span>
     </Link>
    </div>
    <hr />
    <div className="center">
          <ul>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </ul>
            <Link to="/users" style={{textDecoration: "none"}}>
            <ul>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
            </ul>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
            <ul>
              <StoreIcon className="icon" />
            <span>Products</span>
            </ul>
            </Link>

            <ul>
              <AccountCircleOutlinedIcon className="icon" />
            <span>Settings</span>
            </ul>
            <ul>
              <SettingsOutlinedIcon className="icon" />
            <span>Profile</span>
            </ul>
            <ul>
              <InputOutlinedIcon className="icon" />
            <span>Logout</span>
            </ul>

    </div>
    <div className="bottom">
        <div className="colorOption" 
        onClick={() => dispatch({ type : "LIGHT"})}>
        </div>

          <div className="colorOption"
        onClick={() => dispatch({ type : "DARK"})}>
        </div>

    </div>
    </div>
  )
}

export default Sidebar
