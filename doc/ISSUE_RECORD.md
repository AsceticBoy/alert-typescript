# Issue Record

Record development progress occurr issue

## Customer-typings

- *问题*：开发过程中发现没有个 `module` 都需要一份 `@types` 文件，但是明显在开源项目中只有主要的 `module` 才会有 `@types` 文件

- *方案*：看了 `antd` 发现有一个 `typings` 文件夹，但是 `tsconfig.json` 中并没有指定 `typeRoots` 后来自己也尝试了下，也是有效的，所以 `typings -> index.d.ts` 和 `node_modules/@types` 是固定的默认配置

## TypeScript antd import load (按需加载)

- *问题*：在 `ES6` 开发过程中 `antd` 有一个比较好的模块加载方案，只会导入用到的 `component` 主要依赖于插件 `babel-plugin-import`

- *方案一*：`typescript (awesome-typescript-loader)-> es6 (babel-plugin-import)-> chunk`
在实施过程中必须将 `tsconfig.json` 中的 `module -> es6` 这也合乎编译目标，但是紧接着就导致了 `mobx` `mobx-react` 等模块开始找不到声明文件，后来查找后 [发现问题](https://github.com/mobxjs/mobx-react-typescript-boilerplate/issues/3)：`tsconfig.json` 中有一个编译选项 `moduleResolution(决定如何处理查找模块)`

  **原来当我们在不处理 `moduleResolution` 编译项时，它会根据 `module` 编译项来确定, 而 `module` 又会根据 `target` 项来处理，但当我们清楚的指定了 `module -> es6` 间接着也就决定了 `moduleResolution -> classic` 这就产生了模块解析上的方式上的偏倚，后来手动修改了 `moduleResolution -> node (参照require()解析方式)`就可以，当然还未深入研究这个编译项的情况**

- *方案二*：配合插件 [`ts-import-plugin`](https://github.com/Brooooooklyn/ts-import-plugin) 的使用，但是由于我使用的 `awesome-typescript-loader` 不支持 `getCustomTransformers` 没有深入研究，但是估计是在 `typescripe` 层面做了 `AST` 语法分析


