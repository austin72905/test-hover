import React, { useState,useEffect } from 'react'

export default function AddList(props) {

    const {addZhiFu,addDaiFu}=props
    const [zhifulist,setzhifulist]=useState("")
    const [daifulist,setdaifulist]=useState("")

    useEffect(() => {
        if(zhifulist ===""){
            setzhifulist(zhifulist=>zhifulist+addZhiFu)
        }else{
            if(zhifulist!==addZhiFu){
                setzhifulist(zhifulist=>zhifulist+"\n"+addZhiFu)
            }
            
        }
        
    }, [addZhiFu])

    useEffect(() => {
        if(daifulist ===""){
            setdaifulist(daifulist=>daifulist+addDaiFu)
        }else{
            if(daifulist!==addDaiFu){
                setdaifulist(daifulist=>daifulist+"\n"+addDaiFu)
            }
            
        }
        
    }, [addDaiFu])

    return (
        <div className="task  mt-4">
            <div className="row">
                <div className="col-4 ">
                    新增支付
                </div>

                <div className="col-4 ">
                    新增代付
                </div>
            </div>

            <div className="row">
                <div className="col-4 ">
                    <textarea name="" id="" cols="35" rows="5" style={{ wordWrap: "normal" }} value={zhifulist} readOnly={true}></textarea>
                </div>
                <div className="col-4 ">
                    <textarea name="" id="" cols="35" rows="5" style={{ wordWrap: "normal" }} value={daifulist} readOnly={true}></textarea>
                </div>
            </div>
        </div>
    )
}
