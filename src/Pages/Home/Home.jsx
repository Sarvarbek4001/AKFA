import React from 'react'
import "./Home.scss"
import { Statistictoday } from '../../Components/StatisticToday/StatisticToday';
import { Topclients } from '../../Components/TopClients/TopClients';
import { Thebestclients } from '../../Components/TheBestClients/TheBestClients';
import { Returnclients } from '../../Components/ReturnClients/ReturnClients';
import { Filteritem } from '../../Components/FilterItem/FilterItem';
export function Home(props) {
    return (
        <>
            <div className="container">
                <Filteritem/>
                 <div className="home">      
                    <div className="home__left">
                        <Statistictoday/>
                        <Returnclients/>
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
