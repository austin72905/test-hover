import React from 'react'

export default function UpdateBtn(props) {

    const {tag,update } = props
    return (
        <div className="col-2 justify-content-end">
            <button className="btn btn-secondary" onClick={update}>{tag}</button>
        </div>
    )
}
