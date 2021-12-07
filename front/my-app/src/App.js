import logo from './logo.svg';
import './App.css';
import PostContainer from './containers/post/PostContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PostContainer/>
      </header>
    </div>
  );
}

export default App;
