import React from 'react'
import '../App.scss'

export default function SearchBox(props) {

    const {tag,val,search} = props
    //style={{backgroundColor:"#2894FF",borderColor:"#2894FF"}}
    return (
        <div className="col-6 titleTxt">
            <h5 >
                {tag}
            </h5>
            <input type="text" value={val} readOnly={true}/>
            <button className="btn btn-primary mx-2" onClick={search} >搜尋</button>
        </div>
    )
}
