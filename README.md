# Vite + React + TypeScript + Ant Design

基于 Vite 构建的 React 企业级前端项目模板，集成 Ant Design 组件库和 ProComponents。

## 技术栈

- ⚡ [Vite](https://vitejs.dev/) - 下一代前端构建工具
- ⚛️ [React 18](https://react.dev/) - 用于构建用户界面的 JavaScript 库
- 📘 [TypeScript](https://www.typescriptlang.org/) - 带类型语法的 JavaScript
- 🐜 [Ant Design 5](https://ant.design/) - 企业级 UI 设计语言
- 🧩 [Ant Design ProComponents](https://procomponents.ant.design/) - 高级组件库
- 🎨 [Less/Sass](http://lesscss.org/) - CSS 预处理器
- 🗃️ [Redux](https://redux.js.org/) - 状态管理
- 🚦 [React Router v6](https://reactrouter.com/) - 路由管理

## 环境要求

- Node.js >= 16.18.0
- npm >= 9.6.6 或 Yarn

## 开发工具

推荐：VSCode + ESLint 插件

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

应用将在 http://localhost:3000 启动

### 生产构建

```bash
npm run build
# 或
yarn build
```

### 预览生产构建

```bash
npm run preview
```

## 可用脚本

| 命令 | 描述 |
|------|------|
| `dev` | 启动开发服务器（端口 3000，自动打开浏览器） |
| `build` | 执行 TypeScript 检查并构建生产版本 |
| `preview` | 预览生产构建 |
| `lint` | 运行 ESLint 检查代码 |

## 项目结构

```
├── public/          # 静态资源
├── src/             # 源代码
│   ├── components/  # 公共组件
│   ├── pages/       # 页面组件
│   ├── router/      # 路由配置
│   ├── store/       # Redux 状态管理
│   ├── utils/       # 工具函数
│   └── assets/      # 样式和资源文件
├── index.html       # HTML 入口
├── vite.config.ts   # Vite 配置
└── tsconfig.json    # TypeScript 配置
```

