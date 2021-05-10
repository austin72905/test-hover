import React from 'react'

export default function WhiteArea(props) {
    const {hdInput,name,white}=props

    console.log("white",white)
    return (
        <div className="col-5">
            <small>白名單</small>
            <textarea name="" id="" cols="40" rows="6" onChange={e=>{hdInput(name,e)}} value={white}></textarea>
        </div>
    )
}
