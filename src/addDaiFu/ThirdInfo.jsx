import React from 'react'

import PaymentUrl from '../components/PaymentUrl'
import TextBox from '../components/TextBox'

export default function ThirdInfo(props) {
    const {hdInput,payName,logName,paymenyUrl,queryUrl,keyRules} =props
   
    return (
        <div className="col-6">
            <div className="row my-1">
                <TextBox tag="PayName" hdInput={hdInput} name="payName" val={payName} />
            </div>
            <div className="row my-1">
                <TextBox tag="LogName" hdInput={hdInput} name="logName" val={logName} />
            </div>
            <div className="row my-1">
                <PaymentUrl tag="代付網關" hdInput={hdInput} name="paymenyUrl" val={paymenyUrl} />
            </div>
            <div className="row my-1">
                <PaymentUrl tag="查詢網關" hdInput={hdInput} name="queryUrl" val={queryUrl} />
            </div>
            <div className="row my-1">
                <TextBox tag="密鑰綁定說明" hdInput={hdInput} name="keyRules" val={keyRules} />
            </div>
        </div>
    )
}
