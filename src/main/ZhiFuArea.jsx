import { React, Fragment, useState, useEffect } from 'react'
import '../App.scss'

import PaymentUrl from '../components/PaymentUrl'
import TurnBtn from '../components/TurnBtn'
import UpdateBtn from '../components/UpdateBtn'
import TextBox from '../components//TextBox'
import ClearBtn from '../components/ClearBtn'
import { PAYCODE, TYPE } from '../payTypeCode'




export default function ZhiFuArea(props) {
    const terminal = [
        { name: "掃碼", code: TYPE.QR },
        { name: "H5", code: TYPE.H5 },
        { name: "WAP", code: TYPE.WAP },
        { name: "條形碼", code: TYPE.BARCODE },
        { name: "銀聯快捷", code: TYPE.銀聯快捷 }
    ]

    const zhiFuType = [
        { name: "支付寶", code: PAYCODE.ALIPAY },
        { name: "網銀", code: PAYCODE.FASTPAY },
        { name: "微信", code: PAYCODE.WEIXIN },
        { name: "雲閃付", code: PAYCODE.CLOUDPAY },
        { name: "銀聯", code: PAYCODE.UNIONPAY },
        { name: "QQ", code: PAYCODE.QQPAY }

    ]

    const { update, terminate, turnOn, clear,payInfo } = props
    
    const [payMethod, setpayMethod] = useState(preparePayMethod(payInfo.payMethod))
    
    //props 的 payInfo 改變值時，修改state
    useEffect(() => {
        setpayMethod((payMethod) => preparePayMethod(payInfo.payMethod))
    }, [payInfo])

    
    
    //監聽打勾的
    function handleCheck(e) {
        
        const val = e.target.value.split(' ')
        console.log("val",val)
        const method = Number(val[0])
        const type = Number(val[1])
        const newPayMethod=payMethod.map(el=>{
            if(el.payType.method === method && el.payType.type === type){
                el.checked=! el.checked
            }
            return el
        })
        console.log(newPayMethod)
        setpayMethod(payMethod=>newPayMethod)
        
    }

    


    function preparePayMethod(payMethod){
        const payMenu=[]
        zhiFuType.forEach(m=>{
            terminal.forEach(t=>{
                if(payMethod.find(el => el.method===m.code && el.type === t.code))
                {
                    payMenu.push({
                        payType:{method:m.code,type:t.code},
                        checked:true})
                }else{
                    payMenu.push({
                        payType:{method:m.code,type:t.code},
                        checked:false})
                }
                                 
            })
        })
        return payMenu;
    }

    //console.log("payMethod",payMethod)

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
                <div className="row gx-1 my-2">
                    {terminal.map(t => (
                        <div className="col-2">
                            <input type="checkbox" className="mx-1" onChange={handleCheck} checked={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked} value={m.code+" "+t.code}/>
                            {m.name + t.name}
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


