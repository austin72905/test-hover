import React, { Component, createRef } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {Modal} from 'bootstrap'
import './App.scss'

import SearchBar from './SearchBar'
import NavBar from './navBar/NavBar'
import Main from './main/Main'
import White from './white/White'
import SetTool from './setTool/SetTool'
import AddZhiFu from './addZhiFu/AddZhiFu'
import AddDaiFu from './addDaiFu/AddDaiFu'
import AddList from './addList/AddList'
import MsgModal from './MsgModal'

export default class App extends Component {

    //初始資料，清空資料時用
    initState = {
        payInfo: {
            paymentName: "",
            logName: "",
            paymentUrl: "",
            payMethod: [],
            remark: "",
            isEnable: true
        },

        withdrawInfo: {
            withdrawUrl: "",
            queryUrl: "",
            keyRules: "",
            isEnable: true
        },

        addZhiFu: "",
        addDaiFu: "",
        modalMag:"",

    }

    //組件狀態管理
    state = { ...this.initState }

    //測試資料
    tempstate = {
        payInfo: {
            paymentName: "91支付",
            logName: "91ZhiFu",
            paymentUrl: "http://www.google.com",
            payMethod: [
                { method: 103, type: 1000 },
                { method: 103, type: 3000 },
                { method: 104, type: 1000 }
            ],
            remark: "支持終端號綁定通道邊碼"
        },

        withdrawInfo: {
            withdrawUrl: "http://www.google.com",
            queryUrl: "http://www.google.com",
            keyRules: "只有一個MD5密鑰"
        }

    }

    //訊息框節點
    modalref=createRef()
    modal=null

    
    search = () => {
        this.setState({ payInfo: this.tempstate.payInfo,modalMag:"查無資料" },()=>{
            this.modal.show()
        })
        
        console.log("search")
    }

    update = () => {
        this.setState({ modalMag:"修改成功" },()=>{
            this.modal.show()
        })
        console.log("update")
    }

    terminate = () => {
        const { payInfo, withdrawInfo } = this.state
        withdrawInfo.isEnable = false
        payInfo.isEnable = false
        this.setState({ payInfo, withdrawInfo,modalMag:"停用成功" },
            () => {
                this.modal.show()
            })
        
        console.log("停用")
    }

    turnOn = (isZhiFu = true) => {
        const { payInfo, withdrawInfo } = this.state
        if (isZhiFu) {
            payInfo.isEnable = true
            this.setState({ payInfo: payInfo,modalMag:"開啟成功" },
                () => {
                    this.modal.show()
                })
        } else {
            withdrawInfo.isEnable = true
            this.setState({ withdrawInfo: withdrawInfo,modalMag:"開啟成功" },
                () => {
                    this.modal.show()
                })
        }

    }

    //清空資料
    clear = () => {
        this.setState(this.initState)
    }

    queryWhite = () => {
        console.log("查詢白名單")
    }

    addWhite = () => {
        this.setState({ modalMag:"新增白名單成功" },
        () => {
            this.modal.show()
        })
        console.log("新增白名單")
    }

    deleteWhite = () => {
        this.setState({ modalMag:"刪除白名單成功" },
        () => {
            this.modal.show()
        })
        console.log("刪除白名單")
    }

    //新增到每日新增框
    addZhFuToList = (addresult) => {
        this.setState({ addZhiFu: addresult,modalMag:"新增成功" },()=>{
            this.modal.show()
        })
    }

    addDaiFuToList = (addresult) => {
        this.setState({ addDaiFu: addresult,modalMag:"新增成功" },()=>{
            this.modal.show()
        })
    }


    //生命週期，創建modal 節點的ref
    componentDidMount(){
        //訊息框
        this.modal=new Modal(this.modalref.current,{
            //點擊背景不會讓訊息框消失
            backdrop:"static",     
        })
    }

    render() {

        const { payInfo, withdrawInfo, addZhiFu, addDaiFu,modalMag } = this.state
        return (
            <div>
                <div className="container outbox">
                    <SearchBar search={this.search} payInfo={payInfo} />
                    <div className="row">
                        {/*功能列表*/}
                        <NavBar />
                        <div className="col-9">
                            <Switch>
                                <Route path="/main" render={props => <Main update={this.update} terminate={this.terminate} turnOn={this.turnOn} clear={this.clear} payInfo={payInfo} withdrawInfo={withdrawInfo} />} />
                                <Route path="/white" render={props => <White queryWhite={this.queryWhite} addWhite={this.addWhite} deleteWhite={this.deleteWhite} />} />
                                <Route path="/settool" exact component={SetTool} />
                                <Route path="/addZhiFu" render={props => <AddZhiFu addZhFuToList={this.addZhFuToList} />} />
                                <Route path="/addDaiFu" render={props => <AddDaiFu addDaiFuToList={this.addDaiFuToList} />} />
                                <Redirect to="/main" />
                            </Switch>


                            <AddList addZhiFu={addZhiFu} addDaiFu={addDaiFu} />

                        </div>

                        {/*modal */}
                        <MsgModal nodeName={this.modalref} showMsg={modalMag}/>




                    </div>
                </div>
            </div>
        )
    }
}
