import React from 'react'
import "./Locations.scss"
export function Locations(props) {
    
    return (
        <>
            <select className='select__locations'>
                <option defaultValue="localization">Локация</option>
                <option value="tashkent">Toshkent</option>
                <option value="namangan">Namangan</option>
                <option value="farg'ona">Farg'ona</option>
            </select>
        </>
    )
}
