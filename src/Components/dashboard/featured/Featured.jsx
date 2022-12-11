import "./featured.scss"
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Total Points</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={67} text={"67"} strokeWidth="5"/>
         </div>
         <p className="title">Total Points this month</p>
         <p className="amount">1500 points</p>
         <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <div className="resultAmount">33</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">560</div>
            </div>
          </div>  
             <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">2800</div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Featured
