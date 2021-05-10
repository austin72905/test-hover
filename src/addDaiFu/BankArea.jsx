import React from 'react'

export default function BankArea(props) {
    const {freeBank,banks,hdInput,name,hdCheck}=props

    return (
        <div className="col-6">
            <div className="row">
                <div className="col-4">
                    <input type="radio" name="bank" onClick={hdCheck} checked={freeBank}/>任意銀行
            </div>

                <div className="col-4">
                    <input type="radio" name="bank" onClick={hdCheck} checked={!freeBank}/>指定銀行
            </div>
            </div>
            <div className="my-2 ">
                <textarea name="" id="" cols="50" rows="5" onChange={e=>{hdInput(name,e)}} value={banks}></textarea>
            </div>
        </div>
    )
}
