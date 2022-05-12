const React = require('react');
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Root from './routes/Root.jsx';
import MyPage from './routes/MyPage.jsx';
import Search from './routes/Search.jsx';
import NotFound from './routes/NotFound.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userID: '1',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log('username is: ', username);
    console.log('password is: ', password);

    if (username && password) {
      // redirect to Home
      // set isLoggedIn -> true
      let prevState = this.state;
      this.setState({
        ...prevState,
        loggedIn: true
      });
      // 
    } else {
      // throw an error
    }
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <h1><a href="">Serengeti</a></h1>
          <hr className="bottom-hr" />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={this.state.loggedIn ? [<Nav />, <Root />] : <Login login={this.handleLogin}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

        {/* <Router>
<Route path="/mypage" element={<MyPage loggedIn={this.state.loggedIn} userID={this.state.userID} />}></Route>
          <Nav loggedIn={this.state.loggedIn} userID={this.state.userID} />
          <Routes>
            <Route path="/login" element={<Login loggedIn={this.state.loggedIn} userID={this.state.userID} />}></Route>
            <Route path="/register" element={<Register loggedIn={this.state.loggedIn} userID={this.state.userID} />}></Route>
            <Route path="/search" element={<Search loggedIn={this.state.loggedIn} userID={this.state.userID} />}></Route>
            <Route path="/" element={<Root />}></Route>
            <Route path="/">
              {this.state.loggedIn ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/:id" element={<NotFound />}></Route>
          </Routes>
        </Router> */}