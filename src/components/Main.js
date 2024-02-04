import React, { useEffect, useState } from "react";
import '../index.css';
import Form from "./Form";
import Nav from "./Nav";


export default function App() {
    return (
        <div>
        <Nav></Nav>
        <h1>Welcome to Home Page</h1>
        <h2>View Data</h2>
        <Form></Form>
      </div>
    );
  }
  