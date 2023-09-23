import "./App.css";
import NavbarCustom from "./NavbarCustom/NavbarCustom";
import Rechart from "./Rechart/Rechart";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold my-6">Vite + React</h1>
      <div className="container mx-auto">
        <NavbarCustom></NavbarCustom>
        <hr className="border-gray-800" />
        <Rechart></Rechart>
      </div>
    </>
  );
}

export default App;
