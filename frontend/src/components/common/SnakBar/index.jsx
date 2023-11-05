import {Component} from "react";
import PropTypes from 'prop-types';
import {Alert, Snackbar} from "@mui/material";

class CustomSnackBar extends Component {
    static propTypes = {
        open: PropTypes.bool,
        className: PropTypes.string,
        message: PropTypes.object,
        anchorOrigin: PropTypes.object,
        children: PropTypes.node,
        severity: PropTypes.string,
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        open: false,
        className: "",
        message: "",
        name: "CustomSnackBar",
        severity: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
            vertical: "bottom", horizontal: "center"
        },
        variant: 'filled'
    }

    handleButtonClose = (event) =>{
        const {onClose} = this.props
        onClose && onClose({event,})
    }

    renderChildren = (message, children) => {
        if (message) return message;
        if (children) return  children;
    }

    render() {
        const {
            open,
            className,
            message,
            name,
            severity,
            autoHideDuration,
            anchorOrigin,
            children,
            variant
        }=this.props;

        return(
        <Snackbar
            name="custom_snakbar"
            open={open}
            className={className}
            anchorOrigin={anchorOrigin}
            autoHideDuration={autoHideDuration}
            onClose={this.handleButtonClose}
        >
            <Alert variant={variant} severity={severity} onClose={this.handleButtonClose} >
                {this.renderChildren(message, children)}
            </Alert>
        </Snackbar>
        )
    }

}
export default CustomSnackBar;