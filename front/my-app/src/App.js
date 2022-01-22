import './App.css';
import './containers/header/Header.css'
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
import UserContainer from "./containers/user/UserContainer";
import Profile from "./components/body/ProfileComponent";
import Posts from "./components/body/PostsComponent";
import AddPost from "./components/body/AddPostComponent";
import Post from "./components/post/PostComponent";

const queryClient = new QueryClient();

function App() {
    const User = {
        name: 'Andriy',
        age: 20,
        avatar: {
            file: {
                id: 1,
                name: 'My-photo',
                path: './photos'
            }
        },
        files: [{
            id: 2,
            name: 'Newphoto',
            path: './photos'
        }, {
            id: 3,
            name: 'Newphoto2',
            path: './photos'
        }],
        addrr: {
            main: {
                line1: 'mainline1',
                line2: 'mainline2',
                zip: 333
            },
            alt: {
                line1: 'altline1',
                line2: 'altline2',
                zip: 4444
            }
        },
        friends: [{
            name: 'Sasha',
            age: 20,
            avatar: {
                file: {
                    id: 5,
                    name: 'Sasha-photo',
                    path: './photos'
                }
            },
            files: [{
                id: 6,
                name: 'Newphoto',
                path: './photos'
            }, {
                id: 7,
                name: 'Newphoto2',
                path: './photos'
            }],
            addrr: {
                main: {
                    line1: 'mainline1',
                    line2: 'mainline2',
                    zip: 33
                },
                alt: {
                    line1: 'altline1',
                    line2: 'altline2',
                    zip: 22
                }
            }
        }]
    }
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ErrorBoundary>
                    <nav className='Header'>
                        <ul>
                            <li>
                                <Link to='Posts'>Posts</Link>
                            </li>
                            <li>
                                <Link to='Posts/new'>Add Post</Link>
                            </li>
                            <li>
                                <Link to='Profile'>Profile</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='Main'>
                        <Routes>
                            <Route path="/"
                                   element={<Profile Surname='test' FirstName='test' Email='test@ga' Phone='555'/>}/>
                            <Route path="/Profile"
                                   element={<Profile Surname='test' FirstName='test' Email='test@ga' Phone='555'/>}/>
                            <Route path="/Posts" element={<PostContainer/>}/>
                            <Route path="/Posts/new" element={<AddPost/>}/>
                            <Route path="/Posts/:id" element={<Post/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/users/:id" element={<UserContainer/>}/>
                        </Routes>
                    </div>
                </ErrorBoundary>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
