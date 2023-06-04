# vite-plugin-light-view 
用于vite打包的插件
- [npm链接](https://www.npmjs.com/package/vite-plugin-light-view) 

## 描述
用于单页应用预获取JS资源文件
## 解决问题
在单页应用中资源文件可能懒加载,用于提前加载资源文件,使用时直接304使用缓存。防止网络冷启动的卡顿
## 实现过程
在vite打包完成的钩子中 ，递归扫描dist文件夹生成资源数组字符串，创建预获取文件的js，使用`vite-plugin-parse-html`的`injec`t函数往`index.html`添加`sources`。页面启动时自动加载脚本。
## 实战
