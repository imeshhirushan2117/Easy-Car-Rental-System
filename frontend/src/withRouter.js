/*
import { useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();

        return (
            <Component
                navigate={navigate}
                {...props}
            />
        );
    };

    return Wrapper;
};*/
import {useParams,useNavigate} from "react-router-dom";

export function withRouter(Child ) {
    return ( props ) => {
        const params = useParams();
        const navigate = useNavigate();
        return <Child { ...props } params ={ params } />;
    }
}