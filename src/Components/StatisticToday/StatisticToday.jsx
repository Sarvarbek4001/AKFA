import React from 'react'
import "./StatisticToday.scss"
export function Statistictoday(props) {
    

    return (
        <>
            <div className="statistics__today">
                 <h2 className='statistics__today-heading'>Статистика за сегодня</h2>
                 <div className="statistics__today--all">
                     <div className="products_sold"> 
                       <p className='statistics__today--name'>Продано продукции</p>
                       <span className='statistics__today--count'>387</span>
                       <p className='statistics__today--text'>тонн</p>
                     </div>
                     <div className="new__clients"> 
                       <p className='statistics__today--name'>Новых клиентов</p>
                       <span className='statistics__today--count'>1 281</span>
                       <p className='statistics__today--text'>человек</p>
                     </div>
                     <div className="revenue"> 
                       <p className='statistics__today--name'>Выручка</p>
                       <span className='statistics__today--count'>276</span>
                       <p className='statistics__today--text'>млн. сум</p>
                     </div>
                 </div>
            </div>
        </>
    )
}
