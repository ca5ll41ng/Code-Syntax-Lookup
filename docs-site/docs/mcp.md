# MCP 接入说明

本知识库内置 MCP（Model Context Protocol）服务器，任何支持 MCP 的 AI 客户端（ZCode、Claude Desktop、Cursor 等）都可以直接查询。

## 服务器

- 启动命令：`node server/mcp_server.mjs`（stdio 传输，零依赖）
- 协议：JSON-RPC 2.0，newline-delimited

## 客户端配置示例

```json
{
  "mcpServers": {
    "code-syntax-lookup": {
      "command": "node",
      "args": ["/path/to/Code-Syntax-Lookup/server/mcp_server.mjs"]
    }
  }
}
```

## 可用工具

| 工具 | 说明 |
|---|---|
| `search_syntax(language, query, category?, danger?, lang?, limit?)` | 检索函数/语法/安全条目，中文关键词与函数名均可 |
| `get_entry(language, name)` | 获取完整条目正文（含参数/示例/危险标注） |
| `list_dangerous(language, type?, cwe?, limit?)` | 列出危险函数清单（如 type=sink, cwe=CWE-78） |
| `kb_stats()` | 知识库统计 |

## 使用示例

审计时可直接问 AI：

- "用 code-syntax-lookup 查一下 `move_uploaded_file` 有什么风险"
- "列出 PHP 中所有 CWE-78（命令注入）相关的 sink 函数"
- "搜索 PHP 里处理文件上传的函数"

## llms.txt

除 MCP 外，仓库根目录与 `corpus/php/` 下提供 [llms.txt](https://llmstxt.org/) 标准导出：

- `llms.txt` — 总索引
- `corpus/php/llms.txt` — PHP 条目目录（含签名与危险标注）
- `corpus/php/llms-full.txt` — 全量正文（约 12 MB，适合一次性投喂或离线 RAG 语料）
