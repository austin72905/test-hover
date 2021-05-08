import React from 'react'

export default function PaymentUrl(props) {

    const {tag ,val} = props
    return (
        <div className="col-10">
            {tag}
            <input type="text" className="mx-1" style={{ width: '400px' }}  value={val}/>
        </div>
    )
}
