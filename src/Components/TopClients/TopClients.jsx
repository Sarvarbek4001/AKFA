import React from 'react'
import "./TopClients.scss"
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
export function Topclients(props) {
    

    return (
        <>
             <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Топ клиентов</h2>
                        <div className="top__clients--export">
                            <Sendbtn/>
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>
                 <div className="top__clients--data">
                    <table className="top__clients--table">
                            <thead>
                                <tr>
                                    <th >Клиент</th>
                                    <th className='top__clients--head' >Месяц</th>
                                    <th >Квартал</th>
                                    <th >Год</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='rows'>
                                    <td >Имя клиента</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                </tr>  
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                </tr> 
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                    <td>2 569 544</td>
                                </tr>  
                               
                                                         
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}
