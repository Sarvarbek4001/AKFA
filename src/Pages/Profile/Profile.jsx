import React from 'react'
import "./Profile.scss"
import { Sales } from '../../Components/Sales/Sales'
import { TotalSales } from '../../Components/TotalSales/TotalSales'
import { Filteritem } from '../../Components/FilterItem/FilterItem'
import { Dataclients } from '../../Components/DataClients/DataClients'
import { Numberofclients } from '../../Components/NumberOfClients/NumberOfClients'
import NumberOfClientsCharts from '../../Components/NumberOfClientsCharts/NumberOfClientsCharts'
import StatisticsPieChart from '../../Components/StatisticsPieChart/StatisticsPieChart'
function Profile() {
  return (
    <div className='container'>
        <Filteritem/>
        <div className="home">      
                    <div className="home__left">
                        <NumberOfClientsCharts/>
                        <Numberofclients/>
                        {/* <Dataclients/> */}
                    </div>
                    <div className="home__right">
                        <StatisticsPieChart/>
                        <TotalSales/>
                        <Sales/>
                    </div>
        </div>
    </div>
  )
}

export default Profile