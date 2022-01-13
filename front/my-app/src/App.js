import './App.css';
import HeaderContainer from "./containers/header/HeaderContainer";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderContainer startpage='Profile'/>}/>
                <Route path="/Profile" element={<HeaderContainer startpage='Profile'/>}/>
                <Route path="/Posts" element={<HeaderContainer startpage='Posts'/>}/>
                <Route path="/Posts/add" element={<HeaderContainer startpage='AddPost'/>}/>
                <Route path="/Posts/:id" element={<HeaderContainer startpage='Post'/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;
