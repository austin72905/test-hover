import {React,useState,useEffect} from 'react'
import TextBtn from '../components/TextBtn'
export default function ParseArea(props) {
    const {hdParse,isClear} =props
    const [parseVal , setparseVal]=useState("")

    function hdclick(){
        const waitToParse =parseVal.split('\n')
        console.log("waitToParse",waitToParse)    
        const newState=parseInput(waitToParse)
        hdParse(newState)
        
        
    }

    function hdInput(e){
        const val =e.target.value
        setparseVal(parseVal=> val)
        
    }

    //輸入時
    useEffect(() => {
        const waitToParse =parseVal.split('\n')   
        const newState=parseInput(waitToParse)
        hdParse(newState)
    }, [parseVal])

    //清空內容
    useEffect(()=>{
        setparseVal(parseVal=> "")
        return ()=>{
            hdParse({isClear:true})
        }
    },[isClear])

    

    function parseInput(paresList){
        
        if(!paresList[0].startsWith("[")){
            paresList.splice(0,0,"[代付]")
        }
        const isFreeBank = paresList[paresList.length-1].indexOf("指")!==-1?false:true  
        let keyRules = paresList.find(el => el.startsWith("密"))
        if(keyRules){
            keyRules=keyRules.replace("密鑰綁定順序: ","")
        }     
        let queryUrl = paresList.find(el => el.startsWith("查"))?paresList.find(el => el.startsWith("查")):""   
        if(queryUrl!==""){
            const urlstartIndex= queryUrl.indexOf("h")
            queryUrl =queryUrl.substring(urlstartIndex)
            
        }
        
        let whiteList =paresList.slice(4)
        whiteList = whiteList.filter(el=>checkIp(el))
        whiteList= whiteList.length>0?whiteList:[""]
       
        const newState ={
            payName:paresList[1],
            logName:paresList[2],
            paymenyUrl:paresList[3],
            queryUrl:queryUrl,
            freeBank: isFreeBank,
            keyRules: keyRules,
            white: whiteList.length>1?whiteList.join("\n"):whiteList[0]
        }
        return newState
    }

    function checkIp(ip) {
        let exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        let reg = ip.match(exp);
        if(reg==null){
            return false;
        } else {
            return true;
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
