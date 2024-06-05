const fs = require("fs")
function readFile(path) {
    const data = fs.readdirSync(path, "utf-8", true, true)
    let arr = []
    let fileNames = []
    for (let item of data) {
        let pt = path + "/" + item
        var st = fs.statSync(pt)
        if (st.isDirectory()) {
            let dt = fs.readdirSync(pt, "utf-8", true, true)
            for (let i of dt) {
                let tempObj = { "filePath": pt + "/" + i, "fileName": i.replace(/\..*/,"") }
                fileNames.push(tempObj)
            }
        }
    }
    console.log(fileNames);
    return fileNames
}
module.exports = readFile