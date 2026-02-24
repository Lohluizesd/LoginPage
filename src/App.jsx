import image from "./assets/image.png";
import "./App.css";
import Forms from "./Forms";
import Infos from "./Infos";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div>
        <img src={image} className="imagem" alt="Login Icon Code Queens" />
      </div>
      <div className="container-infos">
        <Infos />
        <Forms />
        <Footer />
      </div>
    </div>
  );
}
export default App;
