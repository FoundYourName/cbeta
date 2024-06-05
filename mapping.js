const fs = require("fs")
function jsonNum2Name(txtPath) {
    const f = fs.readFileSync(txtPath, "utf-8")
    const arrary_file_names = f.split("\r\n")
    const arrTemp = []
    let i = 0
    let tempObj = {}
    for (let item of arrary_file_names) {
        if (item.trim().endsWith(",")) {
            item = item.slice(0, -2)
        }
        tempArr = item.trim().split(",")
        if (i < 2) {
            i++
            continue
        } else {
            tempObj = { num: tempArr[0].trimEnd(), name: tempArr.slice(3).join("-").trim() }
            arrTemp.push(tempObj)
            i++
        }
    }
    return arrTemp
}

module.exports = jsonNum2Name