import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
        {
            path:'',
            element:<Home/>
        },
        {
            path:'sign-in',
            element:<SignIn/>
        },
        {
            path:'forgot-password',
            element:<ForgotPassword/>
        },
        {
          path:'sign-up',
          element:<SignUp/>
      },
    ]
  },

]);

export default router;