import React from 'react'
import './App.scss'


import PaymentUrl from './components/PaymentUrl'
import TurnBtn from './components/TurnBtn'
import UpdateBtn from './components/UpdateBtn'
import TextBox from './components//TextBox'



export default function DaiFuArea(props) {

    const {withdrawInfo,update,terminate,turnOn} =props

    function daiFuTurnOn(){
        turnOn(false)
    }

    function daifuTerminate(){
        terminate(false)
    }

    return (
        <div className="daiFu mt-4">
            <div className="row">
                <PaymentUrl tag="代付網關" val={withdrawInfo.withdrawUrl}/>
                <TurnBtn terminate={daifuTerminate} turnOn={daiFuTurnOn}/>
            </div>

            <PaymentUrl tag="查詢網關" val={withdrawInfo.queryUrl}/>
            <div className="row my-2">
                <TextBox tag="密鑰綁定說明" val={withdrawInfo.keyRules}/>
                <UpdateBtn tag="代付修改" update={update}/>

            </div>
        </div>
    )
}


