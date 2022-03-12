import React from 'react'
import "./ReturnClients.scss";
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
export function Returnclients(props) {
    

    return (
        <>
             <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Возвраты</h2>
                        <div className="top__clients--export">
                            <Sendbtn/>
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>

                 <ul className='menu__items'>
                     <li className='menu__item'>
                         <a className='menu__item--link' href="#">Месяц</a>
                     </li>
                     <li className='menu__item'>
                         <a className='menu__item--link' href="#">Квартал</a>
                     </li>
                     <li className='menu__item'>
                         <a className='menu__item--link' href="#">Год</a>
                     </li>
                 </ul>

                 <div className="top__clients--data">
                    <table className="top__clients--table">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th >Клиент</th>
                                    <th >Сумма</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td >Имя клиента</td>
                                    <td>1 236 458 489</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td >Имя клиента</td>
                                    <td>1 125 155 458</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Имя клиента</td>
                                    <td>215 458 454</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td >Имя клиента</td>
                                    <td>198 154 458</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td >Имя клиента</td>
                                    <td>95 551 154</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td >Имя клиента</td>
                                    <td>23 626 798</td>
                                </tr>
                                
                                                         
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}
