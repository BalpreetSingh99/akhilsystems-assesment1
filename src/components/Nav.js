import {
    Link
  } from "react-router-dom";
import './index.css';

export default function Nav() {
  let pathname = window.location.pathname;
  return (
   <div id="nav">
      <p style={pathname==="/main" ? {backgroundColor:"rgb(209, 207, 207)"}:{backgroundColor:"white"}}><Link to="/main">Home</Link></p>
      <p style={pathname==="/admin" ? {backgroundColor:"rgb(209, 207, 207)"}:{backgroundColor:"white"}} ><Link to="/admin">Admin</Link></p>
   </div>
  );
}