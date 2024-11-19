# TypeScript React useCallbackRef Demo

这个项目演示了在React中使用`useCallbackRef`钩子的两种不同实现方式，用于处理DOM引用（refs）并对其变化做出响应。

## 功能特点

1. 使用`useCallbackRef`钩子的实现
   - 使用`use-callback-ref`库
   - 自动处理ref的变化回调
   - 在ref变化时自动设置样式和焦点

2. 使用传统React钩子的实现
   - 使用`useRef`、`useState`和`useEffect`组合
   - 实现相同的功能，但使用更基础的React钩子
   - 展示了不使用专门库时如何实现类似功能

## 安装

```bash
pnpm install
```

## 运行

```bash
pnpm start
```

应用将在浏览器中自动打开。

## 使用说明

项目包含两个演示组件：

1. InputDemo（使用useCallbackRef）
   - 两个输入框之间切换
   - 活动输入框会自动获得焦点并显示绿色边框
   - 非活动输入框显示灰色边框

2. InputDemo2（使用useRef/useState/useEffect）
   - 实现相同的功能
   - 使用React基础钩子
   - 展示了替代实现方式

点击"Switch to Input X"按钮可以在两个输入框之间切换焦点。

## 技术栈

- React 17.0.2
- TypeScript
- use-callback-ref 1.3.2
- Parcel (构建工具)
