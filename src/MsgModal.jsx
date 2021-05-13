import React from 'react'

export default function MsgModal(props) {

    const {nodeName,showMsg}=props
    //console.log("nodeName",nodeName)
    //npm i @popperjs/core --save 要使用modal動畫會需要他
    return (
        <div className="modal fade" tabIndex="-1" ref={nodeName}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">提示訊息</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>{showMsg}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
