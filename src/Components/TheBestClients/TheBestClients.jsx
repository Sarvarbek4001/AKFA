import React from 'react'
import "./TheBestClients.scss"
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
export function Thebestclients(props) {
    

    return (
        <>
             <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Сравнение топ 200 клиентов</h2>
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
                                    <th >8.06.2021</th>
                                    <th >8.06.2020</th>
                                    <th >8.06.2019</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr className='rows the__best--rows'>
                                    <td >Имя клиента</td>
                                    <td className='the__best--rise'>2 569 544</td>
                                    <td className='the__best--rise'>2 769 544</td>
                                    <td>2 569 544</td>
                                </tr>
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}
