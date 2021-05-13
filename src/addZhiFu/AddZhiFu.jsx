import React, { Component } from 'react';
import '../App.scss'
import PaymentUrl from '../components/PaymentUrl'
import TextBox from '../components//TextBox'
import ClearBtn from '../components//ClearBtn'
import UpdateBtn from '../components/UpdateBtn'
import WhiteArea from '../addDaiFu/WhiteArea'
import { zhiFuType,terminal,preparePayMethod } from '../payTypeCode'


class AddZhiFu extends Component {

    initState = {
        payName: "",
        logName: "",
        paymenyUrl: "",
        payMethod: preparePayMethod(),
        remark: "",
        white: "",

    }

    state = { ...this.initState }


    parsePayMethod = (payMethod)=>{
        //console.log("payMethod",payMethod)

        let payMethodStr=""

        //篩選出checked 的payMenu
        payMethod=payMethod.filter(el=>el.checked)

        let payList=[{pay:"",ter:""}]

        payMethod.forEach(el=>{
            const pay = zhiFuType.find(m=>m.code===el.payType.method)
            const ter = terminal.find(t=>t.code===el.payType.type)

            if(!payList.find(pt=>pt.pay ===pay.name)){
                payList.push({pay:pay.name,ter:ter.name})
            }else{
                payList=payList.map(nl=>{
                    if(nl.pay===pay.name){
                        nl.ter+=","+ter.name                
                    }
                    return nl
                })
                
            }

        })

        //最終要顯示的文字
        payList.forEach(el=>{
            if(el.pay!==""){
                payMethodStr+=el.pay+":"+el.ter+" "
            }
        })


        return payMethodStr
        

        
    }

    clear = () => {
        const initMenu =preparePayMethod();
        this.setState({...this.initState,payMethod:initMenu})
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
        const method = Number(val[0])
        const type = Number(val[1])
        const newPayMethod=this.state.payMethod.map(el=>{
            if(el.payType.method === method && el.payType.type === type){
                el.checked=! el.checked
            }
            return el
        })
        this.setState({payMethod:newPayMethod})
        
    }

    

    render() {

        const { payName, logName, paymenyUrl, remark,payMethod } = this.state
        const addpaystr=payName+" "+this.parsePayMethod(payMethod)

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
                {zhiFuType.map(m => (
                    <div className="row gx-1 my-2" key={m.code}>
                        {terminal.map(t => (
                            <div className="col-2" key={t.code}>
                                <input type="checkbox" className="mx-1" onChange={this.handleCheck} checked={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked} value={m.code + " " + t.code} />
                                <span style={payMethod.find(el => el.payType.method ===m.code && el.payType.type === t.code).checked?{backgroundColor:"yellow"}:null}>
                                    {m.name + t.name}
                                </span>
                                
                            </div>
                        ))}

                    </div>
                ))}

                <div className="row my-2 align-items-end">
                    <div className="col-6 mr-5">
                    <WhiteArea hdInput={this.hdInput} name="white"/>
                    </div>
                    
                    <ClearBtn tag="清空" clear={this.clear} />
                    <UpdateBtn tag="新增支付" update={this.props.addZhFuToList} result={addpaystr}/>
                    
                    

                </div>

            </div>
        )
    }
}

export default AddZhiFu;
