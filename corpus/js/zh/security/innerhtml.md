---
id: "js-zh-security-innerhtml"
language: "js"
lang: "zh"
category: "security"
name: "innerHTML"
title: "innerHTML — 危险用法与审计要点"
directive: "security-note"
module: "browser-dom"
source_url: "https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-79"],"note":"XSS 注入 sink：赋值不可信 HTML 会执行其中脚本"}]
---

# innerHTML

**危险等级**：sink（CWE-79）

XSS 注入 sink：赋值不可信 HTML 会执行其中脚本

## 审计要点

- 全局搜索代码中对该 API 的调用，确认数据来源是否可信
- 不可信输入到达此处即构成注入/滥用路径，需在进入前净化或改用安全 API

## 参考

- MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML
- OWASP Cheat Sheet Series（见知识库 security 分类）

