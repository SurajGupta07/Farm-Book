import {Navigate, Route} from "react-router";

export const PrivateRoute = ({ path, element }) => {
    const token = localStorage?.getItem("login");

    return token ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate state={{ from: path }} to="/login" />
    );
}
