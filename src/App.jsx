import Table from './component/Table'
import NavBarComponents from './component/NavBar'
import SliderBanner from './component/Sliders'
import './App.css'
import Rotas from "../src/routes"


function App() {
  return (
    <div>
      <NavBarComponents />
      <Table />
      <SliderBanner />
      <Rotas />
    </div>
  )
}
export default App
