import PropTypes  from "prop-types";
import { Component } from "react";
import Button from '@mui/material/Button';

class CommonButton extends Component{

    PropTypes={
        onClick : PropTypes.func,
        children : PropTypes.node,
        variant : PropTypes.string,
        className : PropTypes.any,
        label : PropTypes.string,
        size : PropTypes.string,
        disabled : PropTypes.bool,
        color : PropTypes.string,
        type : PropTypes.string,
        endIcon : PropTypes.string,
        startIcon : PropTypes.string

    }

    static defaultProps = {
        className:"",
        color:"primary",
        label:"",
        size:"medium",
        variant:"contained",
        disabled:false,
        type:"button"
    }


    handleButtonClick = (event)=>{
        const {onClick,disabled}=this.props;
        if(disabled) return;
        onClick && onClick({event});
    }

    renderChildren(label,children){
        if(label)return label;
        if(children)return children;
    }

    render(){
        const{
            children ,
            variant,
            className,
            label ,
            size ,
            disabled ,
            color,
            type,
            endIcon ,
            startIcon,
            style,
        }=this.props;

        return (
            <Button
                onClick ={this.handleButtonClick}
                variant={variant}
                className={className}
                size ={size}
                disabled ={disabled}
                color={color}
                type ={type}
                endIcon= {endIcon}
                startIcon= {startIcon}
                style ={style}
            >

                {this.renderChildren(label,children)}

            </Button>

        )
    }


}
export default CommonButton