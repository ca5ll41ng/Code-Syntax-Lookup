# Code-Syntax-Lookup

面向**白盒代码审计**的多语言语法与安全知识库。同一份语料，两个消费端：

- **人**：轻量静态站点 + Pagefind 搜索（中文分词，纯静态可离线部署）
- **AI**：MCP 服务器（`search_syntax` / `get_entry` / `list_dangerous` / `kb_stats`）+ [llms.txt](llms.txt) 标准导出 + SQLite 双索引（FTS5 全文，向量层预留）

当前状态：**PHP + Python 全链路已打通**（Java 的 source adapter 按 [完整方案](完整方案.md) 的 M3 计划接入）。

## 语料

| 层 | 来源 | 许可证 |
|---|---|---|
| PHP 函数/语法/安全文档（中英双语，中文优先） | [php/doc-en](https://github.com/php/doc-en) + [php/doc-zh](https://github.com/php/doc-zh) | CC BY 3.0 |
| PHP 危险函数标注（sink/source/sanitizer/validator + CWE） | [designsecurity/progpilot](https://github.com/designsecurity/progpilot) | MIT |
| Python 标准库/语言参考/PEG 语法（中文 .po 段落级对齐，无翻译回退英文） | [python/cpython](https://github.com/python/cpython) Doc/ + [python-docs-zh-cn](https://github.com/python/python-docs-zh-cn) 3.14 分支 | PSF |
| Python 危险调用/导入（B3xx 规则 + CWE） | [PyCQA/bandit](https://github.com/PyCQA/bandit) | Apache-2.0 |

规模：**21,360 条**，其中 PHP 11,177（中文 3,150）+ Python 10,184（中文 2,829）；317 条带危险标注。

## 快速开始

```bash
# 0) 拉取源仓库（浅克隆；cpython 稀疏克隆只取 Doc 与 Grammar）
git clone --depth 1 https://github.com/php/doc-en raw/doc-en
git clone --depth 1 https://github.com/php/doc-zh raw/doc-zh
git clone --depth 1 https://github.com/designsecurity/progpilot raw/progpilot
git clone --depth 1 --filter=blob:none --sparse https://github.com/python/cpython raw/cpython
git -C raw/cpython sparse-checkout set Doc Grammar
git clone --depth 1 https://github.com/python/python-docs-zh-cn raw/python-docs-zh-cn
git -C raw/python-docs-zh-cn fetch --depth 1 origin 3.14 && git -C raw/python-docs-zh-cn checkout FETCH_HEAD
git clone --depth 1 https://github.com/PyCQA/bandit raw/bandit

# 1) 全量构建（转换 → 危险标注 → SQLite → llms.txt → 静态站点）
npm install && (cd docs-site && npm install)
npm run build

# 2) 跑 MCP 冒烟测试（7 项）
npm test

# 3) 启动 MCP 服务器（stdio，接入 ZCode/Claude/Cursor）
npm run mcp

# 4) 本地浏览站点
npm run site:preview   # http://localhost:1414（Pagefind 内置服务）
```

## 仓库结构

```
corpus/{php,python}/{zh,en}/**/*.md  # 【产物】Markdown 语料（frontmatter 携带元数据）
knowledge.db                 # 【产物】SQLite：docs 表 + docs_fts 全文索引
llms.txt / corpus/*/llms*    # 【产物】llmstxt.org v2 导出
sources/php_adapter.mjs      # DocBook XML → Markdown 转换器（中文优先合并）
sources/python_adapter.mjs   # reST/Sphinx → Markdown（按指令切条目 + .po 中文对齐）
pipeline/enrich.mjs          # progpilot(PHP) / bandit(Python) → danger/CWE 标注注入
pipeline/index.mjs           # SQLite 建库（CJK bigram + unicode61）
pipeline/llmstxt.mjs         # llms.txt 导出
pipeline/build_site.mjs      # 语料 → 静态站点
server/kb.mjs                # 查询层（精确名 + FTS 混合检索）
server/mcp_server.mjs        # MCP stdio 服务器（零依赖）
docs-site/                   # 静态站点产物与 Pagefind 搜索
test/mcp_smoke.mjs           # MCP 端到端冒烟测试
完整方案.md                   # 完整技术方案（架构/语料/里程碑/风险）
```

## 元数据（frontmatter）

每条语料是一个 Markdown 文件，例如：

```yaml
---
id: "zh-php-function-move-uploaded-file"
language: "php"
lang: "zh"                # zh=中文官方翻译；en=英文回退
category: "function"      # function | syntax | security | guide
name: "move_uploaded_file"
title: "将上传的文件移动到新位置"
signature: "bool move_uploaded_file(string $from, string $to)"
source_url: "https://www.php.net/manual/zh/function.move-uploaded-file.php"
license: "CC-BY-3.0"
---
```

危险条目额外携带 `danger`（来自 progpilot），如 `system()`：

```json
"danger": [
  {"type": "sink", "attack": ["command_injection"], "cwe": ["CWE-78"], "params": [1]}
]
```

## MCP 接入

在 ZCode / Claude Desktop / Cursor 的 MCP 配置中添加：

```json
{ "mcpServers": { "code-syntax-lookup": { "command": "node", "args": ["/path/to/server/mcp_server.mjs"] } } }
```

详见站点 `/mcp` 页面或 [完整方案](完整方案.md) 第 7 章。

## 路线图

- [x] M0-M1：PHP 全链路（语料/索引/MCP/llms.txt/站点）
- [x] M2：Python（cpython Doc/ reST + .po 中文对齐 + bandit 危险标注 + PEG 语法）
- [ ] M3：Java（OpenJDK javadoc 提取 + JLS 语法条目化）
- [ ] M4：RAG 向量层（BGE-M3 + sqlite-vec + reranker）
- [ ] M5：审计层增强（OWASP CheatSheetSeries 语料、payload 参考）
- [ ] M6：Tauri 桌面打包、语料定时更新

## 许可证说明

- 本仓库代码：MIT
- 语料内容：PHP 手册 CC BY 3.0（署名 The PHP Documentation Group）；危险标注数据来自 progpilot（MIT）
- 不可入语料的来源及红线见 [完整方案](完整方案.md) 第 3.5 节
