import './App.css';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewPost from './newPost';
import Icon from './icon.png'
import ViewPosts from './viewPosts';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/newPost' exact component={NewPost}></Route>
            <Route path='/viewPosts' exact component={ViewPosts}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
}

const Home = () => {
  return(
    <div>
    <img className="home-icon" src={Icon} alt="icon" />

    <div className="home-links">
      <Link style={linkStyle} to="/viewPosts">
        <p>View posts</p>
      </Link>
    </div>
    <div className="home-links">
      <Link style={linkStyle} to="/newPost">
        <p>Make a new post</p>
      </Link>
    </div>
  </div>
  )
  
}
export default App;
