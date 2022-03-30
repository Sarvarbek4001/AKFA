import './App.scss';
import React from 'react';

import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Introsection } from './Components/IntroSection/IntroSection.jsx';
import { Statistictoday } from './Components/StatisticToday/StatisticToday.jsx';
import { Topclients } from './Components/TopClients/TopClients';
import {Thebestclients} from "./Components/TheBestClients/TheBestClients";
import { Returnclients } from './Components/ReturnClients/ReturnClients';
import { Numberofclients } from './Components/NumberOfClients/NumberOfClients';
import { Checkbyregion } from './Components/CheckByRegion/CheckByRegion';
import { Dataclients } from './Components/DataClients/DataClients';
import { Clients } from './Pages/Clients/Clients';
import { Home } from './Pages/Home/Home';
import {Routes,Route} from "react-router-dom";


import SalesStatistics from './Components/SalesStatistics/SalesStatistics';
import Profile from './Pages/Profile/Profile';
import StatisticsPieChart from './Components/StatisticsPieChart/StatisticsPieChart';
import Stock from './Pages/Stock/Stock';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/clients' element={<Clients/>}/>
				<Route path='/stock' element={<Stock/>}/>
			</Routes>
		</div>
	);
}

export default App;
