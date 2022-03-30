import React from 'react'
import { Filteritem } from '../../Components/FilterItem/FilterItem';
import StatisticsPieChart from '../../Components/StatisticsPieChart/StatisticsPieChart';
import { Sales } from '../../Components/Sales/Sales';
import { Dataclients } from '../../Components/DataClients/DataClients';
import { Checkbyregion } from '../../Components/CheckByRegion/CheckByRegion';
function Stock() {
  return (
    <div className='container'>
    <Filteritem/>
    <div className="home">      
                <div className="home__left">
                    <StatisticsPieChart/>
                    <Dataclients/>
                </div>
                <div className="home__right">
                    <Sales/>
                    <Checkbyregion/>
                </div>
    </div>
</div>
  )
}

export default Stock
