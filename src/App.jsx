import "./App.css";
import NavbarCustom from "./NavbarCustom/NavbarCustom";
import NavBarDaisy from "./NavBarDaisy/NavBarDaisy";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center font-semibold my-6">Vite + React</h1>
      <div className="container mx-auto">
        {/* <NavBarDaisy></NavBarDaisy> */}
        <NavbarCustom></NavbarCustom>
      </div>
    </>
  );
}

export default App;
