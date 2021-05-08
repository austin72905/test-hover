import React from 'react'
import '../App.scss'

export default function SearchBox(props) {

    const {tag,val,search} = props

    return (
        <div className="col-6 titleTxt">
            <h5 >
                {tag}
            </h5>
            <input type="text" value={val}/>
            <button className="btn btn-primary mx-2" onClick={search}>搜尋</button>
        </div>
    )
}
