# 医学影像系统

## 创建方式: 

```bash
$ yarn create @umijs/umi-app
# 或 npx @umijs/create-umi-app
```



## 指令：

安装依赖:

```bash
$ yarn
```

开启dev服务器:

```bash
$ yarn start
```

分析构建文件体积:

```bash
$ yarn analyze
```



## 推荐使用的vscode插件:

- Eslint

- Prettier

- One Dark Pro

- koroFileHeader

  


## vscode 配置文件参考:

```json
{
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons",
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
    "fileheader.customMade": {
    // 头部注释
    "Descripttion": "Do not edit", // 文件创建时间(不变)
    "Author": "linkenzone", // 文件最后编辑者
    "Date": "Do not edit" // 文件最后编辑时间
  },
  "fileheader.cursorMode": {
    // 函数注释
    "description": "",
    "Param": ""
  },
}
```

