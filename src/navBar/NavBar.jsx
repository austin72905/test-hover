import React from 'react'
import {NavLink} from 'react-router-dom'

import MyNavLink from './MyNavLink'

export default function NavBar() {
    return (
        <div className="col-2">
            <div className="list-group">
                <MyNavLink  className="list-group-item list-group-item-action" to="/main">支付類型</MyNavLink>
                <MyNavLink className="list-group-item list-group-item-action" to="/white">白名單</MyNavLink>
                <MyNavLink className="list-group-item list-group-item-action" to="/setTool">工具配置</MyNavLink>
                <MyNavLink className="list-group-item list-group-item-action" to="/addZhiFu">新增支付</MyNavLink>
                <MyNavLink className="list-group-item list-group-item-action" to="/addDaiFu">新增代付</MyNavLink>
            </div>
        </div>
    )
}
