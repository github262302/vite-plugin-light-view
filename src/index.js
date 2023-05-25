const { template_LightView } = require("./template")
const { deepPath, getScannPath, writeFile } = require("./util")
/**
 * @param {{path:string}} opts
 */
function LigntView (opts = {path:"dist",name:"light_view.js"}) {
    const scannPath=getScannPath(opts.path)
    return {
        name: 'vite-plugin-lignt_view',
        apply: "build",
        enforce: 'post',
        closeBundle () { 
            let files = deepPath(scannPath)
            let jsPaths = files.map(e => {
                return e.split("dist")[1]
            }).filter(e => /\.js$/.test(e));
            let tempKey="light_view_"+Date.now()
            let code = template_LightView(jsPaths,tempKey)
            writeFile(scannPath+"/"+opts.name, code)
        }
    }
}
module.exports = LigntView
