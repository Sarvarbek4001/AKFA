import React from 'react'
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
export function Numberofclients(props) {

    return (
        <>
              <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Количество клиентов</h2>
                        <div className="top__clients--export">
                            <Sendbtn/>
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>
                 <div className="top__clients--data">
                    <table className="top__clients--table">
                            <thead>
                                <tr>
                                    <th>Клиент</th>
                                    <th >Локация</th>
                                    <th >Сумма</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                                <tr>
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                </tr>
                               
                                                         
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}
