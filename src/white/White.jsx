import React from 'react'
import TextBtn from '../components/TextBtn'

export default function White(props) {
    const {addWhite,deleteWhite,queryWhite} =props
    return (
        <div className="white">
            白名單
            <div className="row">
                <div className="col-9">
                    <textarea name="" id="" cols="75" rows="20"></textarea>
                </div>

                <div className="col-3">
                    <TextBtn tag="查詢白名單" actionFunc={queryWhite}/>
                    <TextBtn tag="新增白名單" actionFunc={addWhite}/>
                    <TextBtn tag="刪除白名單" actionFunc={deleteWhite}/>
                </div>
               
            </div>

            
        </div>
    )
}
