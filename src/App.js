import "./App.css";
import "./Navbar";
import Navbar from "./Navbar";
import From from "./Form";
function App() {
  return (
    <>
      <Navbar Name="Welcome to Word Counter !"></Navbar>
      <div className="container my-9 scroll-smooth">
        <span className="text-2xl  flex justify-center text-slate-900   ">
          Hola!!
        </span>
      </div>
      <From></From>
    </>
  );
}

export default App;
