import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

// 根组件

export default class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' Component={Login}></Route>
                    <Route path='/' Component={Admin}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}