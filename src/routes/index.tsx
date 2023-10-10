import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default Routes;
