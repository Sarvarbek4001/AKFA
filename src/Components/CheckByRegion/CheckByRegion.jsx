import React from 'react'
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
export function Checkbyregion(props) {
    return (
        <>
             <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Средний чек по регионам</h2>
                        <div className="top__clients--export">
                            <Sendbtn/>
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>
                 <div className="top__clients--data">
                    <table className="top__clients--table">
                            <thead>
                                <tr>
                                    <th >Регион</th>
                                    <th >0-5 млн %</th>
                                    <th >5-10 млн %</th>
                                    <th >10-20 млн %</th>
                                    <th >20+ млн %</th>

                                </tr>
                            </thead>
                            <tbody>
                            <tr className='rows the__best--rows'>
                                    <td >Ташкент</td>
                                    <td >10</td>
                                    <td >30</td>
                                    <td>75</td>
                                    <td>7</td>
                            </tr>
                            <tr className='rows the__best--rows'>
                                    <td >Андижан</td>
                                    <td >60</td>
                                    <td >29</td>
                                    <td>45</td>
                                    <td>1</td>
                            </tr>
                            <tr className='rows the__best--rows'>
                                    <td >Бухара</td>
                                    <td >70</td>
                                    <td >21</td>
                                    <td>56</td>
                                    <td>1</td>
                            </tr>
                            <tr className='rows the__best--rows'>
                                    <td >Джизак</td>
                                    <td >18</td>
                                    <td >16</td>
                                    <td>77</td>
                                    <td>2</td>
                            </tr>
                            <tr className='rows the__best--rows'>
                                    <td >Кашкадарья</td>
                                    <td >16</td>
                                    <td >23</td>
                                    <td>5</td>
                                    <td>1</td>
                            </tr>
                            <tr className='rows the__best--rows'>
                                    <td >Навои</td>
                                    <td >42</td>
                                    <td >64</td>
                                    <td>46</td>
                                    <td>4</td>
                            </tr>
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}
