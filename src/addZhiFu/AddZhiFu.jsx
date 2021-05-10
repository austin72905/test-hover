import React, { Component } from 'react';
import '../App.scss'
import PaymentUrl from '../components/PaymentUrl'
import TextBox from '../components//TextBox'
import ClearBtn from '../components//ClearBtn'
import UpdateBtn from '../components/UpdateBtn'
import WhiteArea from '../addDaiFu/WhiteArea'
import { PAYCODE, TYPE } from '../payTypeCode'


class AddZhiFu extends Component {

    terminal = [
        { name: "掃碼", code: TYPE.QR },
        { name: "H5", code: TYPE.H5 },
        { name: "WAP", code: TYPE.WAP },
        { name: "條形碼", code: TYPE.BARCODE },
        { name: "銀聯快捷", code: TYPE.銀聯快捷 }
    ]

    zhiFuType = [
        { name: "支付寶", code: PAYCODE.ALIPAY },
        { name: "網銀", code: PAYCODE.FASTPAY },
        { name: "微信", code: PAYCODE.WEIXIN },
        { name: "雲閃付", code: PAYCODE.CLOUDPAY },
        { name: "銀聯", code: PAYCODE.UNIONPAY },
        { name: "QQ", code: PAYCODE.QQPAY }

    ]

    preparePayMethod =()=> {
        const payMenu = []
        this.zhiFuType.forEach(m => {
            this.terminal.forEach(t => {
                payMenu.push({
                    payType: { method: m.code, type: t.code },
                    checked: false
                })
            })
        })
        console.log(payMenu)
        return payMenu;
    }

    initState = {
        payName: "",
        logName: "",
        paymenyUrl: "",
        payMethod: this.preparePayMethod(),
        remark: "",
        white: "",

    }

    state = { ...this.initState }

    clear = () => {
        this.setState({ ...this.initState })
    }

    hdInput = (name, e) => {
        const val = e.target.value

        this.setState({ [name]: val }, () => {
            console.log("state", this.state)
        })

    }

    //監聽打勾的
    handleCheck=(e) =>{
        
        const val = e.target.value.split(' ')
        console.log("val",val)
        const method = Number(val[0])
        const type = Number(val[1])
        const newPayMethod=this.state.payMethod.map(el=>{
            if(el.payType.method === method && el.payType.type === type){
                el.checked=! el.checked
            }
            return el
        })
        console.log(newPayMethod)
        this.setState({payMethod:newPayMethod})
        
    }

    

    render() {

        const { payName, logName, paymenyUrl, remark,payMethod } = this.state

        return (
            <div className="addZhiFu">
                新增支付
                <div className="row my-2">
                    <TextBox tag="PayName" name="payName" val={payName} hdInput={this.hdInput} />
                </div>
                <div className="row my-2">
                    <TextBox tag="LogName" name="logName" val={logName} hdInput={this.hdInput} />
                </div>
                <div className="row my-2">
                    <PaymentUrl tag="支付網關 " name="paymenyUrl" val={paymenyUrl} hdInput={this.hdInput} />
                </div>
                <div className="row my-2">
                    <TextBox tag="備註 " name="remark" val={remark} hdInput={this.hdInput} />
                </div>
                {this.zhiFuType.map(m => (
                    <div className="row gx-1 my-2">
                        {this.terminal.map(t => (
                            <div className="col-2">
                                <input type="checkbox" className="mx-1" onChange={this.handleCheck} checked={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked} value={m.code + " " + t.code} />
                                {m.name + t.name}
                            </div>
                        ))}

                    </div>
                ))}

                <div className="row my-2">
                    <WhiteArea hdInput={this.hdInput} />

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <ClearBtn tag="清空" clear={this.clear} />
                        <UpdateBtn tag="新增支付" />
                    </div>

                </div>

            </div>
        )
    }
}

export default AddZhiFu;
