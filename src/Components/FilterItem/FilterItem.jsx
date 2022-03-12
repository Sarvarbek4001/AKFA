import React from 'react'
import "./FilterItem.scss"
export function Filteritem(props) {
    return (
        <>
            <div className="filter__items">
                <p className="filter__items--text">Статистика за период</p>
                <form className='filter__items--form'>
                     <select className='filter__item--select' >
                         <option value="1">Май 2020</option>
                         <option value="2">Май 2020</option>
                         <option value="3">Май 2020</option>

                     </select>
                     <select className='filter__item--select' >
                         <option value="1">Сентябрь 2021</option>
                         <option value="2">Сентябрь 2021</option>
                         <option value="3">Сентябрь 2021</option>

                     </select>
                     <select className='filter__item--select' >
                         <option value="1">Сум</option>
                         <option value="2">Сум</option>
                         <option value="3">Сум</option>

                     </select>
                </form>
            </div>
        </>
    )
}
