import {React,useState,useEffect} from 'react'
import TextBox from '../components/TextBox'

export default function SetTool() {

    const [tools,setTools]=useState({readExcel:false,connectCMS:false,token:""})

    function hdInput(e){
        const val = e.target.value
        setTools(tools=>{return {...tools,[val]:!tools[val]}})
        
    }

    useEffect(() => {
        console.log(tools)
    }, [tools])

    return (
        <div className="setTool">
            工具配置
            <div className="row my-2">
                <div className="col-10">
                    <input type="checkbox" className="mx-1" onChange={hdInput} checked={tools.readExcel} value="readExcel"/>
                    新增到excel文檔
                </div>

            </div>

            <div className="row my-2">
                <div className="col-10">
                    <input type="checkbox" className="mx-1" onChange={hdInput} checked={tools.connectCMS} value="connectCMS"/>
                    開啟後台操作
                </div>

            </div>

            <div className="row my-2">
                <div className="col-10">
                    <div className="col-10">
                        後台token
                        <input type="text" className="mx-1" style={{ width: '400px' }} value={tools.token} disabled={!tools.connectCMS}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
