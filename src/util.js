const path = require("path")
const fs=require("fs")
// 扫描路径下所有文件 返回路径地址数据
function deepPath (p) {
    const fs=require("fs")
    const rootPath=path.resolve(p)
    const arr=[]
    function deep (path) {
        const files=fs.readdirSync(path)
        files.forEach(file=>{
            const filePath=path+"/"+file
            const stats=fs.statSync(filePath)
            if(stats.isDirectory()){
                deep(filePath)
            }else{
                arr.push(filePath)
            }
        })
    }
    deep(rootPath)
    return arr
}
function getScannPath (p) {
    return path.resolve(process.cwd(),p)
}
function writeFile (writePath, code) {
    fs.writeFile(writePath, code, (err) => {
        if (err) {
            console.error(err)
            return
        }
        //文件写入成功。
    })
}
function getScript (src) {
    return `<script async src="${src}"></script>`
}
module.exports = {
    deepPath,
    getScannPath,
    writeFile,
    getScript
}
