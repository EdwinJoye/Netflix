import "./App.css";
import Section from "./components/Section";
import Logo from "./img/Netflix_2015_logo.svg";

function App() {
  return (
    <div className="body">
      <header className="fondLogo">
        <img className="logo" src={Logo} />
      </header>
      <Section></Section>
    </div>
  );
}

export default App;
