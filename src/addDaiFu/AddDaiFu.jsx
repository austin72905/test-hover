import React, { Component } from 'react';
import '../App.scss'

import ParseArea from './ParseArea'
import ThirdInfo from './ThirdInfo'
import BankArea from './BankArea'
import WhiteArea from './WhiteArea'

import ClearBtn from '../components/ClearBtn'
import UpdateBtn from '../components/UpdateBtn'


class AddDaiFu extends Component {

    defaultBank="中信銀行-ROC,建設銀行-ICBC,郵政儲蓄-PSBC,中國銀行-ROC,工商銀行-CBC"

    initState={
        payName:"",
        logName:"",
        paymenyUrl:"",
        queryUrl:"",
        keyRules:"",
        freeBank:true,
        banks:this.defaultBank,
        white:"",
        //是否清空
        isClear:true

    }

    state={...this.initState}

    

    hdInput =(name,e)=>{
        const val =e.target.value

        this.setState({[name]:val},()=>{
            console.log("state",this.state.white)
        })
        
    }

    hdParse=(parseState)=>{
        this.setState({...parseState})
    }

    clear=()=>{
        this.setState({...this.initState,isClear:false},()=>{
            console.log("clear")
            console.log(this.state)
        })
    }

    //銀行
    hdCheck=()=>{
        const {freeBank} =this.state
        if(!freeBank){
            this.setState({freeBank:!freeBank,banks:this.defaultBank})
        }else{
            this.setState({freeBank:!freeBank})
        }
        
    }

    getParseData=()=>{

    }

    render() {
        const {payName,logName,paymenyUrl,queryUrl,keyRules,freeBank,banks,white,isClear} =this.state
        return (
            <div className="addDaiFu">
                新增代付
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <ThirdInfo payName={payName} logName={logName} paymenyUrl={paymenyUrl} queryUrl={queryUrl} keyRules={keyRules} hdInput={this.hdInput}/>
                            <ParseArea hdParse={this.hdParse} isClear={isClear}/>
                        </div>

                        <div className="row my-2">
                            <BankArea freeBank={freeBank} banks={banks} name="banks" hdInput={this.hdInput} hdCheck={this.hdCheck}/>
                            <WhiteArea hdInput={this.hdInput} name="white" white={white}/>
                        </div>

                        <div className="row my-2">
                            <ClearBtn tag="清空" clear={this.clear}/>
                            <UpdateBtn tag="新增代付" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDaiFu;
