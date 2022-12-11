import Navbar from "../../Components/dashboard/sidebar/Sidebar"
import Sidebar from "../../Components/dashboard/sidebar/Sidebar"
import Widget from "../../Components/dashboard/widget/Widget"
import Featured from "../../Components/dashboard/featured/Featured"
import Chart from "../../Components/dashboard/chart/Chart"
import Table from "../../Components/dashboard/table/Table"
import "./home.scss"


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="charts">
        <Featured/>
        <Chart title="Last 6 months stats" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Rewards</div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Home