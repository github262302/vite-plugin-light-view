# vite-plugin-light-view 
用于vite打包的插件
- [npm链接](https://www.npmjs.com/package/vite-plugin-light-view) 

## 描述
🛸 用于单页应用预获取JS资源文件
## 解决问题 🐛
在单页应用中资源文件可能懒加载,用于提前加载资源文件,使用时直接304使用缓存。防止网络冷启动的卡顿
## 实现过程
在vite打包完成的钩子中 ，递归扫描dist文件夹生成资源数组字符串，创建预获取文件的js，使用`vite-plugin-parse-html`的`injec`t函数往`index.html`添加`sources`。页面启动时自动加载脚本。
## 实战
- 使用

![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/5c0a167c-bd74-41f7-8071-f521ad3d9418)
![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/6070f970-ea42-471a-af95-07d79e407547)
![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/4a64a50d-b15a-4a22-a53a-d5f18b479d09)
- 效果

![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/899c8fdb-f59f-44d8-a798-1c5fa31c865a)
![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/5ffd28b2-17a7-4194-b30c-ec17410cc741)
![图片](https://github.com/github262302/vite-plugin-lignt-view/assets/71603326/676c677d-5ef0-417a-8e39-f0e7dcf39eb7)
## 思考 🤔
目前使用`script`标签的方式预获取 不太优雅，还可以使用web worker的方式，请求记录会出现在 网络调试工具fetch/xhr里面
