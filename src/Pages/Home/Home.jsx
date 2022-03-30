import React from 'react'
import "./Home.scss"
import { Statistictoday } from '../../Components/StatisticToday/StatisticToday';
import { Topclients } from '../../Components/TopClients/TopClients';
import { Thebestclients } from '../../Components/TheBestClients/TheBestClients';
import { Returnclients } from '../../Components/ReturnClients/ReturnClients';
import { Filteritem } from '../../Components/FilterItem/FilterItem';
import SalesCharts from '../../Components/SalesCharts/SalesCharts';
export function Home(props) {
    return (
        <>
            <div className="container">
                <Filteritem/>
                 <div className="home">      
                    <div className="home__left">
                        <Statistictoday/>
                        <SalesCharts/>
                        <Returnclients/>
                    </div>
                    <div className="home__right">
                        <Topclients/>
                        <Thebestclients/>
                    </div>
                 </div>
            </div>
        </>
    )
}
