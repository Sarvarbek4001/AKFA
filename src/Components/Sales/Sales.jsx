import React from 'react'
import Scal from "../../Assets/images/scal.svg"
import "./Sales.scss"
export function Sales(props) {
    let done = 85;
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
            <div className="container">
            <div className="top__clients">
                 <div className="top__clients--hero">
                        <h2 className="top__clients--heading">Топ регионов по продажам</h2>
                        <div className="top__clients--export">
                            <a className='top__clients--scal' href='#'><img src={Scal} alt="scal-image" /></a>
                        </div>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                        Ташкент
                    </p>
                    <div className="progress">
                        <div className="progress-done" style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">546 456 000</p>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                        Ташкент
                    </p>
                    <div className="progress">
                        <div className="progress-done" style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">546 456 000</p>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                        Ташкент
                    </p>
                    <div className="progress">
                        <div className="progress-done" style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">546 456 000</p>
                 </div>
                 <div className="sell__section--items">
                    <p className='sell__section--text'>
                        Ташкент
                    </p>
                    <div className="progress">
                        <div className="progress-done" style={style}>
                            {done}%
                        </div>
                    </div>
                    <p className="progress__price">546 456 000</p>
                 </div>
             </div>
            </div>
        </>
    )
}
