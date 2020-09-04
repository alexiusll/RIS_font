# 项目通用脚手架

创建方式: 

```bash
$ yarn create @umijs/umi-app
# 或 npx @umijs/create-umi-app
```



## 其他依赖:

#### dependencies:

- moment
- js-cookie
- @types/js-cookie

#### devDependencies:

- eslint
- @umijs/fabric

## 快速开始：

安装依赖:

```bash
$ yarn
```

开启dev服务器:

```bash
$ yarn start
```



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
  ]
}
```

