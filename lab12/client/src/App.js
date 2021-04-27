import GetPart from "./components/GetPart/index.js";
import PutPart from "./components/PutPart/index.js";
import PatchPart from "./components/PatchPart/index.js";

function App() {
  return (
    <div className="App">
      <PutPart />
      <br /><hr />
      <GetPart />
      <br /><hr />
      <PatchPart />
      <br />
    </div>
  );
}

export default App;
