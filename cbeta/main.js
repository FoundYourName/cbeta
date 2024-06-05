const fs = require("fs")
const iteraDir = require("./iteraDir")
const mapping = require("./mapping")
//先将下面路径改成自己电脑上cbeta所在路径
const path = "F:/禅/cbeta_epub_2024r1"
const txtPath = "F:/禅/cbeta_epub_2024r1/filelist_2024r1.txt"
//文件后缀.epub .pdf .mobi 
const fileType = ".epub"
renameFile()
function renameFile() {
    let arrTemp1 = iteraDir(path)
    let arrTemp2 = mapping(txtPath)
    for (let item of arrTemp1) {
        let filePath = item.filePath
        p = filePath.match('.+/')[0]
        let oldName = item.fileName
        for (let item1 of arrTemp2) {
            let num = item1.num
            let newName = item1.name
            if (oldName == num) {
                try {
                    if (oldName !== "T1955") {
                        fs.renameSync(filePath, p + newName + fileType)
                    } else {
                        fs.renameSync(filePath, p + "显密圆通成佛心要集 - 辽 道[厄-殳]集" + fileType)
                    }
                    console.log(filePath + " 命名文件成功!");
                } catch (error) {
                    fs.appendFile(path + "/" + "err.txt", error.toString(), err => {
                        if (err) console.log(err);
                    })
                }
            }
        }
    }
}
