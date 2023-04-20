import './App.css'
import LineChart from './Components/DashBoard/Components/Chart-Components/LineChart'
import SideBar from './Components/DashBoard/Components/SideBar'
import Dashboard from './Components/DashBoard/Dashboard'
import HomePage from './Components/LandingPage/HomePage'
import { StateProvider } from './Components/StateProvider/StateProvider'
import Transactions from './Components/Transactions/Transactions'
import { Route,Routes } from 'react-router-dom'

function App() {
 

  return (

    <div className="App">
    <StateProvider>
    <Routes>
    <Route path='/' element={<><HomePage/></>}/>
    <Route path='/dashboard' element={<><Dashboard/></>}/>
    <Route path='/transactions' element={<><Transactions/></>}/>
      </Routes>
      </StateProvider>
    </div>
  )
}

export default App
