import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./layout/Head";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Single from "./pages/Single";
import Double from "./pages/Double";
import Vip from "./pages/Vip";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
{
  path: '/',
        element: <Head></Head>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
              path:'/booking/1',
              element: <PrivateRoute>
                <Single></Single>
              </PrivateRoute>
            },
            {
              path:'/booking/2',
              element: <PrivateRoute>
                <Double></Double>
              </PrivateRoute>
            },
            {
              path:'/booking/3',
              element: <PrivateRoute>
                <Vip></Vip>
              </PrivateRoute>
            }
            
        ]
}
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;