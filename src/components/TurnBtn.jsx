import React from 'react'

export default function TurnBtn(props) {

    const {terminate,turnOn} =props

    return (
        <div className="col-2 justify-content-end">
            <button className="btn btn-outline-success float-right" onClick={turnOn}>啟用</button>
            <button className="btn btn-danger" onClick={terminate}>停用</button>
        </div>
    )
}
