import React from 'react'
import "./Clients.scss"
import { Date } from '../../Components/Date/Date'
import { Locations } from '../../Components/Locations/Locations'
import { Sendbtn } from '../../Components/SendBtn/SendBtn'
import { Datatable } from '../../Components/DataTable/DataTable'
export function Clients(props) {
    

    return (
        <div className='container'>
                <div className="intro__section ">
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
        </div>
    )
}
