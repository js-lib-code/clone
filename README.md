# clone

实现 JavaScript 引用类型数据的深拷贝功能

## 使用者指南

通过 npm 下载安装代码

```bash
$ npm install clone
```

如果使用 Node.js 环境

```js
var { clone } = require('clone')
clone({ a: 1 })
```

如果使用 webpack 等环境

```js
import { clone } from 'clone'
clone({ a: 1 })
```

如果使用浏览器环境

```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
  clone({ a: 1 })
</script>
```

## 贡献者指南

首次运行需要安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试

```bash
$ npm run test
```

# 待办清单

这里列出会在未来添加的新功能和已经完成的功能

- [x] 完成基本 clone 函数
- [ ] 支持大数据拷贝
- [ ] 支持保留引用关系
