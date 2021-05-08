import React, { Component } from 'react'
import './App.scss'

import SearchBar from './SearchBar'
import NavBar from './NavBar'
import ZhiFuArea from './ZhiFuArea'
import DaiFuArea from './DaiFuArea'

export default class App extends Component {

    state = {
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
        }

    }

    //測試資料
    tempstate = {
        payInfo: {
            paymentName: "91支付",
            logName: "91ZhiFu",
            paymentUrl: "http://www.google.com",
            payMethod: [
                {method:103,type:1000},
                {method:103,type:3000},
                {method:104,type:1000}
            ],
            remark: "支持終端號綁定通道邊碼"
        },

        withdrawInfo: {
            withdrawUrl: "http://www.google.com",
            queryUrl: "http://www.google.com",
            keyRules: "只有一個MD5密鑰"
        }

    }


    search = () => {
        this.setState({ payInfo: this.tempstate.payInfo })
        console.log("search")
    }

    update = () => {
        console.log("update")
    }

    terminate = () => {
        const { payInfo, withdrawInfo } = this.state
        withdrawInfo.isEnable = false
        payInfo.isEnable = false
        this.setState({ payInfo, withdrawInfo },
            () => {
                console.log(this.state.payInfo.isEnable)
            })
        console.log("停用")
    }

    turnOn = (isZhiFu = true) => {
        const { payInfo, withdrawInfo } = this.state
        if (isZhiFu) {
            payInfo.isEnable = true
            this.setState({ payInfo: payInfo },
                () => {
                    console.log("支付啟用",this.state.payInfo.isEnable)
                })
        } else {
            withdrawInfo.isEnable = true
            this.setState({ withdrawInfo: withdrawInfo },
                () => {
                    console.log("代付啟用",this.state.withdrawInfo.isEnable)
                })
        }

    }

    render() {

        const { payInfo, withdrawInfo } = this.state

        return (
            <div>
                <div className="container outbox">
                    <SearchBar search={this.search} payInfo={payInfo} />
                    <div className="row">
                        {/*功能列表*/}
                        <NavBar />
                        <div className="col-9">
                            <ZhiFuArea update={this.update} terminate={this.terminate} turnOn={this.turnOn} payInfo={payInfo} />
                            <DaiFuArea update={this.update} terminate={this.terminate} turnOn={this.turnOn} withdrawInfo={withdrawInfo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
