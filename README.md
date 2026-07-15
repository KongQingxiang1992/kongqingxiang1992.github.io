# KQ Systems Lab

这是一个可直接部署到 GitHub Pages 的静态个人网站。

## 文件结构

```text
kq-systems-lab/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 修改内容

### 修改姓名和简介

编辑 `index.html`：

```html
<h1>
  KONG<br />
  <span>QINGXIANG</span>
</h1>
```

### 修改邮箱

将以下内容：

```text
your-email@example.com
```

全局替换为你的真实邮箱。

### 修改 GitHub 地址

当前默认地址：

```text
https://github.com/kongqingxiang1992
```

### 修改项目

在 `index.html` 中搜索：

```html
<article class="project-card reveal">
```

复制或修改对应项目卡片。

## 部署到 GitHub Pages

将以下 4 个文件上传到仓库根目录：

```text
index.html
style.css
script.js
README.md
```

然后进入：

```text
Settings → Pages
```

设置：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

等待 1—5 分钟后访问：

```text
https://kongqingxiang1992.github.io
```

## 注意

项目详情按钮目前使用：

```html
<a href="#" class="project-link">
```

后续可以改成：

```html
<a href="./projects/worldcup.html" class="project-link">
```

然后为每个项目建立单独页面。
