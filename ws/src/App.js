import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import Modalidades from './Components/Modalidades';


function App() {

    var local = window.location.href.substring(21);


    if (local == "/") {
        return (
            <div>
                <Home></Home>
            </div>
        );
    }

    else if (local == "/login") {
        return (
            <div>
                <Login></Login>
            </div>
        )
    }

    else if (local == "/modalidades") {
        return (
            <div>
                <Modalidades></Modalidades>
            </div>
            )
    }

    else {
        return (
                <NotFound></NotFound>
            )
    }
}

export default App;
