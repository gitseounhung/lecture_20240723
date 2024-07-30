import {createBrowserRouter} from 'react-router-dom'
import App from '../App.js'
import RegisterPage from '../pages/RegisterPage.js'
import CheckEmailPage from '../pages/CheckEmailPage.js'
import CheckPasswordPage from '../pages/CheckPasswordPage.js'
import Authlayouts from '../layout'
import Home from '../pages/Home.js'
import MessgePage from '../components/MessgePage.js'


const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {   
            path: 'register',
            element: <Authlayouts><RegisterPage/></Authlayouts>     
        },
        {
            path: 'email',
            element: <CheckEmailPage/>        
        },
        {
            path: 'password',
            element: <CheckPasswordPage/>
        },
        {
            path: "",
            element: <Home/>,
            Children: [
                {
                    path: 'userld',
                    element: <MessgePage/>
                }
            ]
        }
    ]
}
])

export default router