import React from 'react'

export default function TextBox(props) {

    const { tag,val,hdInput,name } = props



    return (
        <div className="col-10">
            {tag}
            <input type="text" className="mx-1" style={{ width: '400px' }} onChange={e=>{hdInput(name,e)}} value={val}/>
        </div>
    )
}
