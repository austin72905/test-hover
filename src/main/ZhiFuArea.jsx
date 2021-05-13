import { React, useState, useEffect } from 'react'
import '../App.scss'

import PaymentUrl from '../components/PaymentUrl'
import TurnBtn from '../components/TurnBtn'
import UpdateBtn from '../components/UpdateBtn'
import TextBox from '../components//TextBox'
import ClearBtn from '../components/ClearBtn'
import { preparePayMethod,terminal,zhiFuType } from '../payTypeCode'




export default function ZhiFuArea(props) {
    
    const { update, terminate, turnOn, clear,payInfo } = props
    
    const [payMethod, setpayMethod] = useState(preparePayMethod(payInfo.payMethod))
    
    //props 的 payInfo 改變值時，修改state
    useEffect(() => {
        setpayMethod((payMethod) => preparePayMethod(payInfo.payMethod))
    }, [payInfo])

    
    
    //監聽打勾的
    function handleCheck(e) {
        
        const val = e.target.value.split(' ')
        
        const method = Number(val[0])
        const type = Number(val[1])
        //讓打勾的checkd =!
        const newPayMethod=payMethod.map(el=>{
            if(el.payType.method === method && el.payType.type === type){
                el.checked=! el.checked
            }
            return el
        })
        setpayMethod(payMethod=>newPayMethod)
        
    }


    function clearCheckBox(){
        //清空checkbox
        const newPayMethod=payMethod.map(el=>{
            el.checked =false
            return el
        })
        setpayMethod(payMethod=>newPayMethod)
        //執行父層的clear 方法
        clear()
    }
    
    return (
        <div className="zhiFu">

            <div className="row">
                <PaymentUrl tag="網關" val={payInfo.paymentUrl} />
                <TurnBtn terminate={terminate} turnOn={turnOn} />

            </div>

            {zhiFuType.map(m => (
                <div className="row gx-1 my-2" key={m.code}>
                    {terminal.map(t => (
                        <div className="col-2" key={t.code} >
                            <input type="checkbox" className="mx-1" onChange={handleCheck} checked={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked} value={m.code+" "+t.code} />                                           
                            <span style={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked?{backgroundColor:"yellow"}:null}>
                            {m.name + t.name}
                            </span>
                                                        
                        </div>
                    ))}

                </div>
            ))}




            <div className="row my-2">
                <TextBox tag="支付方式" />
                <ClearBtn tag="清空" clear={clearCheckBox}/>
            </div>

            <div className="row my-2">
                <TextBox tag="備註" val={payInfo.remark} />
            </div>
            <div className="row my-2">
                <TextBox tag="浮動金額" />
                <UpdateBtn tag="支付修改" update={update} />
            </div>
        </div>
    )
}


