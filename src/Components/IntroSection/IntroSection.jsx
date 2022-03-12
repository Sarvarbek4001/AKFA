import React from 'react'
import "./IntoSection.scss"
import { Date } from '../Date/Date'
import { Locations } from '../Locations/Locations'
import { Sendbtn } from '../SendBtn/SendBtn'
import { Datatable } from '../DataTable/DataTable'
export function Introsection(props) {
    

    return (
        <>
            <div className="intro__section container">
                <p className='intro__section--text'>Статистика за период</p>
                <form>
                    <Date/>
                    <Locations/>
                    <div className="intro__section--send">
                        <h3 className='intor__section--heading'>Список транзакций</h3>
                        <Sendbtn/>
                    </div>
                </form>
                 <Datatable/>
            </div>

       
        </>
    )
}
