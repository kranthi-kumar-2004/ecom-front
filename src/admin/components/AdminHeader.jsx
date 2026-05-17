import { Link } from "react-router-dom";
import{useState} from "react";
import {FaSearch,FaBell,FaBars} from "react-icons/fa";
import "./css/AdminHeader.css";
function AdminHeader(){
    const [open,setOpen]=useState(false);
    return(
        <header className="user_header">
              <Link to="/" className="logo">
    Smart Store
  </Link>
           
        </header>
    );
}
export default AdminHeader;