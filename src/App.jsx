
import { Sidebar } from "./Components/Sidebar";
import { Home } from "./Components/Home";
import { SongCard } from "./Components/SongCard";
import { NavBar } from "./Components/NavBar";
function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Home/>
      <NavBar/>
    </div>
    
  )
}
export default App;