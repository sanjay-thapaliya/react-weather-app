import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./component/Nav";
import { Main } from "./component/Main";
function App() {
  return (
    <>
      <Nav />
      <div className="centered">
        <Main />
      </div>
    </>
  );
}

export default App;
