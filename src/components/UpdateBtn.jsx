import React from 'react'

export default function UpdateBtn(props) {

    const {tag,update,result } = props


    function updateState(result){
        console.log("updateState")
        console.log(result)
        update(result)
    }

    return (
        <div className="col-2 justify-content-end">
            <button className="btn btn-secondary" onClick={()=>{updateState(result)}}>{tag}</button>
        </div>
    )
}
