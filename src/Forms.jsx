import "./Forms.css";
import Button from "./Button";

function Forms() {
  return (
    <>
      <form className="form">
        <p className="form-texto">Email</p>
        <input type="email" className="input" />
        <p className="form-texto">Password</p>
        <input type="password" className="input" />
      </form>

      <div className="form-options">
        <label className="remember">
          <input type="checkbox" />
          Remember Me
        </label>

        <a href="#" className="form-forgot">
          Forgot Password?
        </a>
      </div>

      <Button variant="secondary">Login</Button>
    </>
  );
}

export default Forms;
