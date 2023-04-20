import React from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import SideBar from './Components/SideBar';
import { AiOutlineLike } from "react-icons/ai";
import{MdOutlineDiscount} from "react-icons/md"
import {HiOutlineCash,HiOutlineUsers}  from "react-icons/hi"
import "./Dashboard.css"
import TopNavbar from './Components/TopNavbar';
import StatBox from './Components/StatBoxes/StatBox';
import { useDataStateValue } from '../StateProvider/StateProvider';
import {BiChevronDown} from "react-icons/bi"
import LineChart from './Components/Chart-Components/LineChart';
import Detail from './Components/DetailComponents/Detail';
import PieChart from './Components/Chart-Components/PieChart';
import DetailPie from './Components/DetailComponents/DetailPie';
export default function Dashboard() {
 const {getTotalRevenue,getTotalTransaction,getAllSubCategories,getCountOfUsers,lineData} =useDataStateValue();
  
  return (
    <div className='dashboard__container'>
    <div className="side__navbar">
    <SideBar/>
    </div>
    <div className="dashboard__right__container">
      <div className="top__navbar">
      {console.log(lineData)}
        <TopNavbar/>
      </div>
      <div className="dashboard__rep_container">
      <div className="statBox1">
      <StatBox title="Total Revenue" data={`$ ${getTotalRevenue()}`} icon={<HiOutlineCash size="2rem"/> } color="#DDEFE0" />
      </div>
      <div className="statBox2">
      <StatBox title="Total Transactions" data={` ${getTotalTransaction()}`} icon={<MdOutlineDiscount size="2rem"/> } color="#F4ECDD"/>
      </div>
      <div className="statBox3">
      <StatBox title="Total Likes" data={getAllSubCategories()} icon={<AiOutlineLike size="2rem"/> } color="#EFDADA"/>
      
      </div>
      <div className="statBox4">
      <StatBox title="Total Users" data={getCountOfUsers()} icon={<HiOutlineUsers size="2rem"/> } color="#DEE0EF"/>
      </div>
      
      
      <div className="line__chart">
      <div className="graph__title">
        <h1>Activities</h1>
        <p>May - June 2021<span><BiChevronDown/></span></p>
      </div>
      <LineChart/>
      </div>
  
        <div className="detail__section1">
        <Detail/>
        </div>
        <div className="detail__section2">
        <div className="graph" style={{height:"100%"}}>
        <DetailPie/>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

 