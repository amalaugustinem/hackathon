import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Map from "../Components/Map/map"

const Dashboard = ()=>{
    let navigate = useNavigate();
    const { currentUser,logout} = useAuth();
    useEffect(()=>{
        if (!currentUser) {
            console.log("cool")
            navigate("/login");
        }
    })
    return(
        <>
        <div onClick={logout}>Logout</div>
        <Map />
        </>
    );
}

export default Dashboard