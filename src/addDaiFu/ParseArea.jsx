import { React, useState, useEffect } from 'react'


export default function ParseArea(props) {
    const { hdParse, isClear } = props
    const [parseVal, setparseVal] = useState("")



    function hdInput(e) {
        const val = e.target.value
        setparseVal(parseVal => val)
    }

    //輸入時
    useEffect(() => {
        const waitToParse = parseVal.split('\n')
        const newState = parseInput(waitToParse)
        hdParse(newState)
    }, [parseVal])

    //清空內容
    useEffect(() => {
        setparseVal(parseVal => "")
        return () => {
            hdParse({ isClear: true })
        }
    }, [isClear])



    function parseInput(paresList) {

        //在最上面插入
        if (!paresList[0].startsWith("[")) {
            paresList.splice(0, 0, "[代付]")
        }

        const checkVal=checkInputParams()
        const payName=checkVal(paresList[1])
        const logName=checkVal(paresList[2])
        const paymenyUrl=checkVal(paresList[3])
        let keyRules=checkVal(paresList.find(el => el.startsWith("密")))
        let queryUrl =checkVal(paresList.find(el => el.startsWith("查")))
        //判斷 任意or 指定銀行
        const isFreeBank =checkVal(paresList[paresList.length - 1].indexOf("指") == -1)
    
        if (keyRules) {
            keyRules = keyRules.replace("密钥绑定顺序:", "")
        }

        //獲取查詢網關
        if (queryUrl !== "") {
            const urlstartIndex = queryUrl.indexOf("h")
            queryUrl = queryUrl.substring(urlstartIndex)

        }

        //獲取白名單
        let whiteList = paresList.slice(4)
        whiteList = whiteList.filter(el => checkIp(el))
        whiteList = whiteList.length > 0 ? whiteList : [""]

        const newState = {
            payName: payName,
            logName: logName,
            paymenyUrl: paymenyUrl,
            queryUrl: queryUrl,
            freeBank: isFreeBank,
            keyRules: keyRules?keyRules:"",
            white: whiteList.length > 1 ? whiteList.join("\n") : whiteList[0]
        }

        return newState
    }

    function checkIp(ip) {
        let exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        let reg = ip.match(exp);
        if (reg == null) {
            return false;
        } else {
            return true;
        }
    }

    //undefined 讓他有個預設值"""
    function checkInputParams(){
        return (func,isFreeBank)=>{
            //判斷指定銀行
            if(isFreeBank){
                return true
            }
            return func?func:""
        }
    }


    return (
        <div className="col-6">
            解析
            <div style={{ display: "flex" }}>
                <textarea name="" id="" cols="40" rows="10" onChange={hdInput} value={parseVal}></textarea>
                {/*<div className="mx-4">
                    <TextBtn tag="解析" actionFunc={hdclick}/>
                </div>*/}

            </div>

        </div>
    )
}
