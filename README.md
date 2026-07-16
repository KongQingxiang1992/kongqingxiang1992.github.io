# KQ Systems Lab v4 Bilingual

可直接部署到 GitHub Pages 的中英文双语个人网站。

## 目录

```text
index.html
style.css
js/
  i18n.js
  main.js
assets/i18n/
  zh.json
  en.json
```

## 部署

将压缩包内全部文件和文件夹上传到 `kongqingxiang1992.github.io` 仓库根目录，覆盖旧文件。

GitHub Pages 设置：

```text
Settings → Pages
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

## 语言切换

右上角按钮显示当前语言：中文页面显示“中文”，英文页面显示“EN”。点击按钮切换语言。语言选择保存在浏览器 `localStorage` 中。

## 修改内容

中英文内容分别位于：

```text
assets/i18n/zh.json
assets/i18n/en.json
```

邮箱已设置为 `240742751@qq.com`。


## v4.1 字体修复

修复能力图谱左侧标签字体不一致：

- 序号统一使用 JetBrains Mono；
- 中文、英文标签统一使用 Inter / Microsoft YaHei；
- FPGA 与其他标签采用相同字号、字重和颜色；
- 激活状态只改变标签颜色，不再依赖泛化的 `.map-tab span` 选择器。


## v4.2 中文姓名

- 中文界面：首页姓名显示为“孔 / 庆翔”；
- 英文界面：首页姓名显示为“KONG / QINGXIANG”；
- 语言切换时姓名同步切换；
- 中文姓名采用中文无衬线字体和独立字号、字距设置。


## v4.3 完整姓名修复

- 中文界面固定显示完整姓名“孔庆翔”；
- 英文界面固定显示“KONG / QINGXIANG”；
- 姓名不再由翻译 JSON 覆盖，避免只显示“孔”；
- 中文姓名强制不换行，并增加移动端自适应字号。
