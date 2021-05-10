import {React,Fragment} from 'react'

export default function TextBtn(props) {

    const {tag,actionFunc} =props
    return (
        <div className="my-3">
            <button className="btn btn-secondary" onClick={actionFunc}>{tag}</button>
        </div>
    )
}
