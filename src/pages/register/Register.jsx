import "./register.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Yankee</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Yankee.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Full Name" className="loginInput" />
            <input placeholder="Phone Number" className="loginInput" />
            <input placeholder="Email (Username)" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log In 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}