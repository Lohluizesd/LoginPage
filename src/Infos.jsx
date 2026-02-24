import Logo from "./assets/logo.png";
import Google from "./assets/google.png";
import "./Infos.css";
import Button from "./Button";

function Infos() {
  return (
    <>
      <div className="infos">
        <img src={Logo} className="info-logo" alt="Logo Code Queens" />
        <h1 className="info-titulo">Login to your Account</h1>
        <p className="info-texto">See what is going on in your business</p>
        <Button variant="primary">
          <img src={Google} alt="Google Icon" />
          Continue with Google
        </Button>
        <p className="info-email">
          ---------- or Sign in with Email ----------
        </p>
      </div>
    </>
  );
}

export default Infos;
