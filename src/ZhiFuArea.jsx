import { React, Fragment, useState, useEffect } from 'react'
import './App.scss'

import PaymentUrl from './components/PaymentUrl'
import TurnBtn from './components/TurnBtn'
import UpdateBtn from './components/UpdateBtn'
import TextBox from './components//TextBox'
import { PAYCODE, TYPE } from './payTypeCode'




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

    const { update, terminate, turnOn, payInfo } = props
    
    const [payMethod, setpayMethod] = useState(payInfo.payMethod)

    //props 的 payInfo 改變值時，修改state
    useEffect(() => {
        setpayMethod((payMethod) => payInfo.payMethod)
    }, [payInfo])

    
    
    //監聽打勾的
    function handleCheck(e) {
        
        const val = e.target.value.split(' ')
        const method = Number(val[0])
        const type = Number(val[1])
        if (payMethod.find(el => el.method === method && el.type === type)) {
            setpayMethod(payMethod =>
                payMethod.filter(item =>!(item.method === method && item.type===type))
            )
        } else {
            setpayMethod(payMethod => {
                payMethod.push({ method,type })
                return payMethod
            })
        }
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
                            <input type="checkbox" className="mx-1" onChange={handleCheck} checked={payMethod.find(el => el.method === m.code && el.type === t.code)} value={m.code+" "+t.code} />
                            {m.name + t.name}
                        </div>
                    ))}

                </div>
            ))}




            <div className="row my-2">
                <TextBox tag="支付方式" />
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


