import React from 'react'

export default function ClearBtn(props) {
    const {tag,clear } = props
    return (
        <div className="col-2 justify-content-end">
            <button className="btn btn-secondary" onClick={clear}>{tag}</button>
        </div>
    )
}
