# Canotion - 癌症患者笔记本

一个基于 Web Components 构建的病历管理应用，帮助肝门胆管癌患者记录检查项目、治疗阶段和胆红素指标。

## 功能特性

- 📁 **档案管理** - 创建、查看、删除患者病历档案
- 🔬 **检查项目追踪** - 记录已完成的各种检查项目（血液检查、影像学检查、病理活检等）
- 💊 **治疗阶段记录** - 追踪手术治疗、化疗、放疗、靶向/免疫治疗等进度
- 📈 **胆红素图表** - 记录并可视化胆红素指标变化
- 💾 **本地存储** - 数据保存在浏览器本地，保护隐私

## 技术栈

- **框架**: [Lit](https://lit.dev/) - 轻量级 Web Components 库
- **构建工具**: [Vite](https://vitejs.dev/)
- **图表**: [Chart.js](https://www.chartjs.org/)
- **语言**: TypeScript

## 开发

```bash
# 安装依赖
yarn install

# 开发模式
yarn dev

# 构建生产版本
yarn build

# 预览生产版本
yarn preview
```

## 部署到 GitHub Pages

1. 构建项目：
   ```bash
   yarn build
   ```

2. 将 `dist` 目录的内容推送到 GitHub 仓库的 `gh-pages` 分支：
   ```bash
   #方式一：使用 git subtree
   git subtree push --prefix dist origin gh-pages

   #方式二：直接推送 dist 内容到 gh-pages 分支
   git push origin `git subtree split --prefix dist main`:gh-pages --force
   ```

3. 在 GitHub 仓库 Settings → Pages 中，将 Source 设置为 `gh-pages` 分支

4. 访问 `https://[username].github.io/[repository]/`

## 项目结构

```
src/
├── components/          # Web Components 组件
│   ├── archive-card.ts
│   ├── bilirubin-chart.ts
│   ├── disease-selector.ts
│   ├── examination-tab.ts
│   ├── note-card.ts
│   ├── patient-info-form.ts
│   ├── stage-guide.ts
│   ├── stage-selector.ts
│   └── treatment-tab.ts
├── pages/               # 页面组件
│   ├── archive-detail-page.ts
│   ├── archive-list-page.ts
│   ├── note-editor-page.ts
│   └── stage-set-page.ts
├── app-root.ts          # 应用根组件
├── main.ts              # 入口文件
├── storage.ts           # 存储工具
└── types.ts             # TypeScript 类型定义
```

## 许可证

MIT
