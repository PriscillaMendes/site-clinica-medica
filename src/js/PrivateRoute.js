import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { children } = props;

    const auth = window.localStorage.getItem('token');

    console.log(children);
    return (
        <>
            {auth
                ? children
                : <Navigate to="login" />}
        </>
    );
};


export default PrivateRoute;
