const React = require('react');

function Login(props) {

  return (
    <div className="usercred-box">
      <div className="usercred-title">Serengeti</div>
      <form onSubmit={props.login} className="usercred-form">
        <input type="text" placeholder="username" name="username" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Login;
