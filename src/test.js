function LightView (code,temp_key) {
    let files = code
    if (localStorage.getItem(temp_key)) {
        return // 已完成
    }
    let timer = setInterval(() => {
        if (files.length === 0) {
            clearInterval(timer)
            localStorage.setItem(temp_key,"1")
            return
        }
        let link = document.createElement("link")
        link.href = files.shift() || ''
        link.as = "script"
        document.body.appendChild(link)
     },500)
}
LightView()
