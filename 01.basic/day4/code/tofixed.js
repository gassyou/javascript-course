Number.prototype.toFixedPlus = function(num) {
    // 严格限定只支持 \d 正整型数字
    num = /^\d+$/.test(num) ? Number(num) : 0;
    // 我们需要操作的数字，它只会是正数，符号是不会进入参加计算的
    let valStr = Number(this).toString();
    // 小数点的位置，也时也是整数部分与符号部分的长度
    let pointIndex = valStr.indexOf('.');
    // 获取数字的最后一位
    function _lastNumber(vStr) {
        return Number(Number(vStr).toString().substr(-1, 1));
    }
    // 进位，虽然这个过程可能会有误差，但是是接近原数如0.000999999998之类的，可以用toFixed变成0.001了
    function _carry(vStr) {
        return ((Number(vStr) + Math.pow(10, -num)).toFixed(num)).toString();
    }
    // 补0, vStr数字, zoreN补0个数, point是否需要'.'
    function _supplyZore(vStr, zoreN, point = '') {
        return vStr + point + new Array(zoreN + 1).join('0');
    }
    if (pointIndex >= 0) {
        // 最后需要变成的长度，比如1.0015.toFixedPlus(3),那么最后变在 1(整数) + 1(小数点) + 3(保留小数的长度)
        let newValLen = pointIndex + 1 + num;
        // 不考虑进位时，返回的结果，即前半部分，比如1.0015的前半部分是0.001
        let preStr = valStr.substr(0, newValLen);
        // 用来判断是否需进位的后半部分，如1.0015的后半部分是5
        let nextStr = valStr.substr(newValLen);
        // 后半部分的第一位数字
        let nextFirstN = nextStr ? Number(nextStr.substr(0, 1)) : 0;
        switch(true) {
            // 四舍去
            case nextFirstN <= 4 :
                valStr = preStr;
                break;
            // 五判断各类情况再处理
            case nextFirstN === 5 :
                if (/^5[0]*$/.test(nextStr)) {
                    // preStr可能会是 1. 这种形式，除了先转成1，再取得前半部最后一个数字
                    let preLastN = _lastNumber(preStr);
                    if (preLastN % 2 === 1) {
                        valStr = _carry(preStr);
                    } else {
                        valStr = preStr;
                    }
                } else {
                    valStr = _carry(preStr);
                }
                break;
            // 六进位
            case nextFirstN >= 6 :
                valStr = _carry(preStr);
                break;
        }
        // 如果有小数变成无小数，去除多余的小数点
        if (num === 0) {
                valStr = valStr.replace('.','');
        } else {
                // 小数时，长度差额，补0个数
                let lessZore = newValLen - valStr.length;
                if (lessZore >= 1) {
                        valStr = _supplyZore(valStr, lessZore);
                }
        }
    } else {
            // 没有小数点时补0
            if (num >= 1) {
                valStr = _supplyZore(valStr, num, '.');
            }
    }
    return valStr;
}


console.log(2.55.toFixedPlus(1));