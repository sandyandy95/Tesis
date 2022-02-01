import React from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Login from '../auth/LoginScreen'
import Router2 from './Router'

export const DashboardRoutes = () => {
    return (
        <>
                <BrowserRouter>
            <div>
                <h1>hola2</h1>
                <Routes>
                    <Route exact path ="/login" component ={<Login></Login>}/>,
                    <Route exact path ="/" component ={<Router2></Router2>}/>
                </Routes>
            </div>

            </BrowserRouter>
        </>
    )
}
export default DashboardRoutes