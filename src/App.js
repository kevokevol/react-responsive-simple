import React, { Component } from 'react'
import './App.css'

function Mobile(props) {
    return <div className = 'hidden-sm hidden-md hidden-lg'>
        {props.children}
    </div>
}
function Tablet(props){
    return <div className = 'hidden-xs hidden-md hidden-lg'>
        {props.children}
    </div>
}
function MobileAndTablet(props){
    return <div className = 'hidden-md hidden-lg'>
        {props.children}
    </div>
}
function Desktop(props){
    return <div className = 'hidden-xs hidden-sm'>
        {props.children}
    </div>
}
function SmallDesktop(props){
    return <div className = 'hidden-xs hidden-sm hidden-lg'>
        {props.children}
    </div>
}
function LargeDesktop(props){
    return <div className = 'hidden-xs hidden-sm hidden-md'>
        {props.children}
    </div>
}


export {
    Mobile,
    Tablet,
    MobileAndTablet,
    Desktop,
    SmallDesktop,
    LargeDesktop
}