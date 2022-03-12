import React from 'react'
import "./DataTable.scss"
import { Table } from 'react-bootstrap'
import PhoneImg from "../../Assets/images/phone.svg";
import MessageImg from "../../Assets/images/messageadd.svg";
import DeletedImg from "../../Assets/images/deleted.svg";
import Vector1 from "../../Assets/images/vector1.svg";
import Vector2 from "../../Assets/images/vector2.svg";
export function Datatable(props) {
    return (
        <>
                 <div className="table__section">
                    <Table responsive className='table' >
                        <thead >
                            <tr >
                                <th >Клиент</th>
                                <th >Дилеры</th>
                                <th >Местоположения</th>
                                <th >Последняя покупка</th>
                                <th >Покупок за год</th>
                                <th >Сумма за год</th>
                                <th >Контакты</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                            <tr>
                                <td>Екатерина Анашкина</td> 
                                <td>Шавкат</td>     
                                <td>Ташкент</td>     
                                <td>17.04.2021</td>     
                                <td>12</td>     
                                <td>55 Млн</td>     
                                <td>
                                    <a href="#" className="table__contact">
                                        <img src={PhoneImg} alt="phone" />
                                    </a>
                                    <a href="#" className="table__contact_msg">
                                        <img src={MessageImg} alt="message" />
                                    </a>
                                    <a href="#" className="table__contact">
                                        <img src={DeletedImg} alt="phone" />
                                    </a> 
                                </td>     
                            </tr>
                           
                           
                        
                        </tbody>
                </Table>
                <div className="table__rows--items">
                    <div className="table__rows--item">
                        <p className="table__rows--text">Rows per page:</p>
                        <select className='table__rows--select' >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <p> <span className='table__rows--number'>14</span> of <span className='table__rows--all--data'>135</span></p>
                        <a className='table__rows--data--before' href='#'><img src={Vector1} alt="" /></a>
                        <a className='table__rows--data--after' href='#'><img src={Vector2} alt="" /></a>
                    </div>
                </div>

            </div>
        
        </>
    )
}
