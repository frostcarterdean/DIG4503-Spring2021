import BuildTeamPut from "./components/BuildTeamPut/index.js";
import GetTeam from "./components/GetTeam/index.js";
import PatchTeam from "./components/PatchTeam/index.js";
import DeleteTeam from "./components/DeleteTeam/index.js";
import ShowCollection from "./components/ShowCollection/index.js";

function App() {
  return (
    <div className="App">
      <BuildTeamPut />
      <br /><hr />
      <GetTeam />
      <hr />
      <PatchTeam />
      <br /><hr />
      <DeleteTeam />
      <br /><hr />
      <ShowCollection />
      <br />
    </div>
  );
}

export default App;
