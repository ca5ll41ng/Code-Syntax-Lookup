---
id: "js-zh-security-storage-setitem"
language: "js"
lang: "zh"
category: "security"
name: "Storage.setItem"
title: "Storage.setItem — 危险用法与审计要点"
directive: "security-note"
module: "browser-dom"
source_url: "https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-922"],"note":"localStorage 明文存储敏感信息"}]
---

# Storage.setItem

**危险等级**：sink（CWE-922）

localStorage 明文存储敏感信息

## 审计要点

- 全局搜索代码中对该 API 的调用，确认数据来源是否可信
- 不可信输入到达此处即构成注入/滥用路径，需在进入前净化或改用安全 API

## 参考

- MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem
- OWASP Cheat Sheet Series（见知识库 security 分类）

