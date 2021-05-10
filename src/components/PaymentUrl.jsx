import React from 'react'

export default function PaymentUrl(props) {

    const {tag ,val ,name,hdInput} = props
    return (
        <div className="col-10">
            {tag}
            <input type="text" className="mx-1" style={{ width: '400px' }} onChange={e=>{hdInput(name,e)}}  value={val}/>
        </div>
    )
}
