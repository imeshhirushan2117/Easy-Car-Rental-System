import {Component} from "react";
import Button from "@mui/material/Button";
import {withStyles} from "@mui/styles";
import not_found from '../../assets/img/404-error.png'
import {Link} from "react-router-dom";

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#181818',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img_container: {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },

    link: {
        textDecoration:'none !Important',
    }
})

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.img_container}>
                    <img src={not_found}/>
                </div>
                <Link className={classes.link} to={"/"}>
                    <Button className={classes.btn} variant="contained" onClick={() => {
                        this.checkValidity()
                    }}>Back To Home Page</Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(styleSheet)(NotFound);