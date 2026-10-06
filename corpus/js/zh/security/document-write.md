---
id: "js-zh-security-document-write"
language: "js"
lang: "zh"
category: "security"
name: "document.write"
title: "document.write — 危险用法与审计要点"
directive: "security-note"
module: "browser-dom"
source_url: "https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-79"],"note":"向文档流写入不可信 HTML = XSS"}]
---

# document.write

**危险等级**：sink（CWE-79）

向文档流写入不可信 HTML = XSS

## 审计要点

- 全局搜索代码中对该 API 的调用，确认数据来源是否可信
- 不可信输入到达此处即构成注入/滥用路径，需在进入前净化或改用安全 API

## 参考

- MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write
- OWASP Cheat Sheet Series（见知识库 security 分类）

