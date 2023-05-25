const template_LightView = (arr,temp_key) => { 
    let code=arr.map(e=>`"${e}"`)
    return `
    function LightView () {
        let files = [${code}]
        let temp_key = "${temp_key}"
        if (localStorage.getItem(temp_key)) {
            return // 已完成
        }
        let timer = setInterval(() => {
            if (files.length === 0) {
                localStorage.setItem(temp_key,"1")
                clearInterval(timer)
                return
            }
            let link = document.createElement("link")
            link.href = files.shift() || ''
            link.as = "script"
            link.rel="preload"
            document.body.appendChild(link)
         },500)
    }
    LightView()
    `
}
function template_Script (fileName) {
    return `<script async src="${fileName}"><script>`
}
module.exports = {
    template_LightView,
    template_Script,
}
