import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./layout/Head";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
{
  path: '/',
        element: <Head></Head>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ({params}) => fetch(`http://localhost:3000/booking/${params.id}`)
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
              path:'/details/:id',
              element: <PrivateRoute>
                <Booking></Booking>,
              </PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:3000/details/${params.id}`)
            }
            // {
            //   path:'/details/:id',
            //   element: <Details></Details>,
            //   loader: ({params}) => fetch(`http://localhost:3000/details/${params.id}`)
            // }
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