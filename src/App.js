import React, { Component } from 'react'

function ExtraSmall(props) {
    return <div className = 'visible-xs'>
        {props.children}
    </div>
}
function Small(props){
    return <div className = 'visible-sm'>
        {props.children}
    </div>
}
function Medium(props){
    return <div className = 'visible-md'>
        {props.children}
    </div>
}
function Large(props){
    return <div className = 'visible-lg'>
        {props.children}
    </div>
}
export {
    ExtraSmall,
    Small,
    Medium,
    Large
}