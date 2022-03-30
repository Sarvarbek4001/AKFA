import React from 'react'
import Scal from "../../Assets/images/scal.svg"
import "./TotalSales.scss"
export function TotalSales(props) {
    let done = 100;
    const [style, setStyle] = React.useState({});
    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
		}
		setStyle(newStyle);
	}, 200);
    return (
        <>
            <div className="">
            <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Всего продаж</h2>
                        <div className="top__clients--export">
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                    2021
                    </p>
                    <div className="progress total--progres">
                        <div className="progress-done " style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">456 468</p>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                    2020
                    </p>
                    <div className="progress total--progres">
                        <div className="progress-done" style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">236 488</p>
                 </div>
             </div>
            </div>
        </>
    )
}
