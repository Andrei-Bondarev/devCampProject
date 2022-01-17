import './App.css';
import HeaderContainer from "./containers/header/HeaderContainer";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

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
        <BrowserRouter>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<HeaderContainer startpage='Profile' user={User}/>}/>
                    <Route path="/Profile" element={<HeaderContainer startpage='Profile' user={User}/>}/>
                    <Route path="/Posts" element={<HeaderContainer startpage='Posts' user={User}/>}/>
                    <Route path="/Posts/new" element={<HeaderContainer startpage='AddPost' user={User}/>}/>
                    <Route path="/Posts/:id" element={<HeaderContainer startpage='Post' user={User}/>}/>
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
