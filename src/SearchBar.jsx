import React from 'react'
import './App.scss'

import SearchBox from './components/SearchBox'

export default function SearchBar(props) {
    const {search,payInfo} =props
    return (

        <div className="row justify-content-center">
            <SearchBox tag="第三方名稱" search={search} val={payInfo.paymentName}/>
            <SearchBox tag="Logname" search={search} val={payInfo.logName}/>
        </div>

    )
}
