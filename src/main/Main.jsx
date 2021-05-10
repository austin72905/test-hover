import {React,Fragment} from 'react'
import ZhiFuArea from './ZhiFuArea'
import DaiFuArea from './DaiFuArea'

export default function Main(props) {

    const {update,terminate,turnOn,clear,payInfo,withdrawInfo}=props

    return (
        <Fragment>
            <ZhiFuArea update={update} terminate={terminate} turnOn={turnOn} clear={clear} payInfo={payInfo} />
            <DaiFuArea update={update} terminate={terminate} turnOn={turnOn} withdrawInfo={withdrawInfo} />
        </Fragment>
    )
}
