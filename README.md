# batman

TypeScript 是一种给 JavaScript 加上类型声明的语言，可以非常优雅的解决上述问题，让策略的维护更加方便。

## 使用方法

```
$ git clone https://github.com/golua/batman
$ npm install
$ npm run dev
```

## 添加新的策略

- 假设要添加名为 策略1 的策略
- 在 `src` 文件夹中添加文件 `策略1.ts`
- 编写策略代码，写好 `main` 函数
- 把每个策略当成一个模块并且导出 `export default main`
- 在 `gulpfile.js` 添加你的策略
``` javascript
const strategyList = [
    '策略1',
]
```
- 编译 `npm run dev`
- 就可以在 `dist` 文件夹找到编译后的策略代码了
- 复制粘贴到 botvs 里（或者用插件部署上去）

## 关于一切

我是一个 JS 程序员，外加量化新手，还在学习策略编写中，欢迎交流。

如果对此项目有任何疑问或者问题，欢迎提 ISSUE。也非常欢迎提 PR 来帮助共同完善这个项目。

谢谢~！
