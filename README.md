# nodejs-monorepo-template

## 常用开发命令

- bootstrap: 安装依赖
- build: 执行构建命令
- build:watch: 执行构建命令，并监听文件变更
- clear: 清理构建内容及 node_modules 目录
- preinstall: 执行 preinstall
- commit: 提交 commit
- test: 执行单测用例
- test:watch: 执行单测用例，并监听单测文件变更，如有变更，则重新执行单测。
- coverage:report: 查看单侧覆盖率报告
- changelog: 生成 changelog
- version: 修改版本号
- publish: 发布版本
- lint: 检测代码规范性
- lint:fix: 检测代码规范并修复问题
- prettier: 格式化代码

## feature

### pnpm + typescript + eslint + prettier + husky + lint-staged + jest + commmitlint + commitizen + editorconfig + gitlab ci

- 集成 pnpm，支持 workspace
- 集成公司 gitlab ci，默认提供了以下 3 个能力：
  - nodejs v12 单测
  - nodejs v14 单测
  - 生成测试覆盖率报告
- 集成 eslint，统一代码规范
- 集成 prettier，统一代码风格
- 集成 husky，默认提供了以下 3 个 git hook
  - commit-msg: 对 commit msg 执行 lint 校验
  - pre-commit: 提交代码之前执行 lint-staged 命令
  - pre-push: 提交代码之前执行单测，防止单测未通过就提交代码
- 集成 jest 单测工具
- 集成 commitlint，对 commit msg 进行 lint 校验
- 统一编辑器代码风格 .editorconfig
- 提供 packages 模板 packages/example
