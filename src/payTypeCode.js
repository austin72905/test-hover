const PAYCODE = {
    FASTPAY: 101,
    ALIPAY: 103,
    WEIXIN: 104,
    CLOUDPAY: 106,
    UNIONPAY: 107,
    QQPAY: 108
}

const TYPE = {
    QR: 1000,
    H5: 2000,
    WAP: 3000,
    BARCODE: 4000,
    銀聯快捷: 5000
}

const terminal = [
    { name: "掃碼", code: TYPE.QR },
    { name: "H5", code: TYPE.H5 },
    { name: "WAP", code: TYPE.WAP },
    { name: "條形碼", code: TYPE.BARCODE },
    { name: "銀聯快捷", code: TYPE.銀聯快捷 }
]

const zhiFuType = [
    { name: "支付寶", code: PAYCODE.ALIPAY },
    { name: "網銀", code: PAYCODE.FASTPAY },
    { name: "微信", code: PAYCODE.WEIXIN },
    { name: "雲閃付", code: PAYCODE.CLOUDPAY },
    { name: "銀聯", code: PAYCODE.UNIONPAY },
    { name: "QQ", code: PAYCODE.QQPAY }

]

//初始化checkbox
function preparePayMethod(payMethod = null) {
    const payMenu = []
    zhiFuType.forEach(m => {
        terminal.forEach(t => {
            if (payMethod != null) {
                if (payMethod.find(el => el.method === m.code && el.type === t.code)) {
                    payMenu.push({
                        payType: { method: m.code, type: t.code },
                        checked: true
                    })
                } else {
                    payMenu.push({
                        payType: { method: m.code, type: t.code },
                        checked: false
                    })
                }
            }else{
                payMenu.push({
                    payType: { method: m.code, type: t.code },
                    checked: false
                })
            }


        })
    })
    return payMenu;
}



export { PAYCODE, TYPE ,terminal,zhiFuType,preparePayMethod}