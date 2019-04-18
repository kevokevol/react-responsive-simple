import React, { Component } from 'react'

class ResponsiveComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: this.breakpointActive(window.innerWidth),
        }
        this.breakpointActive = this.breakpointActive.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
    }
    breakpointActive(width){
        if (!this.props.min && !this.props.max)
            return true
        else if (!this.props.min)
            return width < this.props.max
        else if (!this.props.max)
            return width >= this.props.min
        else
            return width >= this.props.min && width < this.props.max
    }

    updateDimensions() {
        if (this.state.display != this.breakpointActive(window.innerWidth))
            this.setState({display: this.breakpointActive(window.innerWidth)})
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

    render(){
        return this.state.display
        ? <div>{this.props.children}</div> 
        : <div></div>
    }
}

function Mobile(props){
    return <ResponsiveComponent min={Number.MIN_VALUE} max={768}>
        {props.children}
    </ResponsiveComponent>
}
function Tablet (props){
    return <ResponsiveComponent min={768} max={992}>
        {props.children}
    </ResponsiveComponent>
}
function MobileAndTablet (props){
    return <ResponsiveComponent max={992}>
        {props.children}
    </ResponsiveComponent>
}
function Desktop (props){
    return <ResponsiveComponent min={992}>
        {props.children}
    </ResponsiveComponent>
}
function SmallDesktop (props){
    return <ResponsiveComponent min={992} max={1200}>
        {props.children}
    </ResponsiveComponent>
}
function LargeDesktop (props){
    return <ResponsiveComponent min={1200}>
        {props.children}
    </ResponsiveComponent>
}

export {
    ResponsiveComponent,
    Mobile,
    Tablet,
    MobileAndTablet,
    Desktop,
    SmallDesktop,
    LargeDesktop
}