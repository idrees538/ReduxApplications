import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
    return ( <
        div className = "App" >
        <
        Provider store = { store } >
        <
        BrowserRouter >
        <
        Routes >
        <
        route path = '/'
        element = { Home }
        /> <
        route path = '/cart'
        element = { Cart }
        /> <
        /Routes>


        <
        /BrowserRouter>

        <
        /Provider> <
        /div>
    );
}

export default App;