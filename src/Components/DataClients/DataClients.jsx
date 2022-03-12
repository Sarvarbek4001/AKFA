import React from 'react'
import { Sendbtn } from '../SendBtn/SendBtn'
import Scal from "../../Assets/images/scal.svg"
import Visible from "../../Assets/images/visble_icon1.svg"
import Hidden from "../../Assets/images/visible_icon2.svg"
import "./DataClients.scss"

export function Dataclients(props) {
    const [visible, setVisible] = React.useState(false)
    const [icon, setIcon] = React.useState(false);

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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td >Имя клиента</td>
                                    <td>Ташкент, Чиланзар</td>
                                    <td>2 569 544</td>
                                    <td onClick={()=>{
                                        setVisible(!visible)
                                        setIcon(!icon)
                                    }}>
                                        {icon ? <img src={Hidden} alt="" /> : <img src={Visible} alt="" />}
                                    </td>
                                    
                                </tr> 
                               { visible &&  <tr className='data__clients-row' >
                                   <td colSpan={4}>
                                   <table className="data__clients--table">
                                            <thead className='data__clients--head'>
                                                <tr className='data__clients--rows'>
                                                    <th>Имя</th>
                                                    <th>Район</th>
                                                    <th>Телефон</th>
                                                </tr>
                                            </thead>
                                            <tbody className='data__clients--body'>
                                                <tr>
                                                    <td>Дилер 1</td>
                                                    <td>Учтепинский</td>
                                                    <td>+99890 984 54 54</td>        
                                                </tr>     
                                            </tbody>
                                    </table>
                                    </td>
                                </tr>}   
                                    
                            </tbody>
                    </table>
                 </div>
             </div>
        </>
    )
}





