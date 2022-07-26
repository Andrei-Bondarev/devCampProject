import React, {useEffect} from "react";
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import {QueryClient, QueryClientProvider} from "react-query";
import PostContainer from "./containers/post/PostContainer";
import UsersContainer from './containers/users/UsersContainer'
import UserContainer from "./containers/users/UserContainer";
import Profile from "./components/body/ProfileComponent";
import AddPost from "./components/body/AddPostComponent";
import Post from "./components/post/PostComponent";
import HeaderContainer from "./containers/header/HeaderAppBar";
import {useState} from "react";
import LoginFormContainer from "./containers/login/LoginForm";
import authContext from "./authContext";

const queryClient = new QueryClient();

function App() {
    const [userData, setUserData] = useState({
        authenticated: false, user: null
    });
    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem('auth'));
        if (authData) {
            setUserData(authData);
        }
    }, []);
    console.log(userData);
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ErrorBoundary>
                    <authContext.Provider value={{userData, setUserData}}>
                        <HeaderContainer/>
                        <div className='Main'>
                            <Routes>
                                <Route path="/"
                                       element={<Profile Surname='test' FirstName='test' Email='test@ga'
                                                         Phone='555'/>}/>
                                <Route path="/profile"
                                       element={<Profile Surname='test' FirstName='test' Email='test@ga'
                                                         Phone='555'/>}/>
                                <Route path="/posts" element={<PostContainer/>}/>
                                <Route path="/newPosts" element={<AddPost/>}/>
                                <Route path="/posts/:id" element={<Post/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/users/:id" element={<UserContainer/>}/>
                                <Route path="/login" element={<LoginFormContainer/>}/>
                            </Routes>
                        </div>
                    </authContext.Provider>
                </ErrorBoundary>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
