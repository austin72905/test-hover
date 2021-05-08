import React from 'react'

export default function NavBar() {
    return (
        <div className="col-2">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    支付類型</a>
                <a href="#" className="list-group-item list-group-item-action">白名單</a>
                <a href="#" className="list-group-item list-group-item-action">新增支付</a>
                <a href="#" className="list-group-item list-group-item-action">新增代付</a>
            </div>
        </div>
    )
}
