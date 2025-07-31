# 时间戳转换工具（Chrome 扩展）

一个简洁实用的 Chrome 浏览器扩展，支持时间戳与本地/UTC时间的自动转换，支持一键复制，支持查看当前时间毫秒时间戳。

<img width="668" height="496" alt="image" src="https://github.com/user-attachments/assets/724b5f6d-6cec-4cbd-bcce-6cc2c1504987" />

## 功能特性

- 输入时间戳（支持秒级和毫秒级，自动识别），自动展示对应的本地时间和 UTC 时间（格式：YYYY-MM-DD HH:mm:ss）。
- 本地时间后括号内显示本地时区（如 +08:00）。
- 支持一键复制转换后的本地时间、UTC 时间。
- 支持显示当前时间的毫秒时间戳，并可一键复制。
- 页面美观，时间内容采用等宽字体，背景可自定义。

## 使用方法

1. 克隆本仓库到本地：
   ```bash
   git clone <repo-url>
   ```
2. 打开 Chrome，进入扩展管理页面（chrome://extensions/），开启“开发者模式”。
3. 点击“加载未打包的扩展程序”，选择本项目文件夹。
4. 点击浏览器右上角扩展图标，即可使用。

## 目录结构

```
├── icons/                # 扩展图标目录
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html            # 扩展弹窗页面
├── popup.js              # 弹窗页面逻辑（JavaScript）
├── popup.css             # 弹窗页面样式
├── manifest.json         # 扩展配置文件
└── README.md             # 项目说明文档
```

## 开发说明

- 主要逻辑在 `popup.js`，无需构建步骤，直接使用。
- 如需修改样式，可编辑 `popup.css`。
- 图标文件可自行替换。

## License

MIT
