---
id: "js-zh-security-location-assign"
language: "js"
lang: "zh"
category: "security"
name: "Location.assign"
title: "Location.assign — 危险用法与审计要点"
directive: "security-note"
module: "browser-dom"
source_url: "https://developer.mozilla.org/zh-CN/docs/Web/API/Location/assign"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-601"],"note":"重定向目标含用户输入 = 开放重定向"}]
---

# Location.assign

**危险等级**：sink（CWE-601）

重定向目标含用户输入 = 开放重定向

## 审计要点

- 全局搜索代码中对该 API 的调用，确认数据来源是否可信
- 不可信输入到达此处即构成注入/滥用路径，需在进入前净化或改用安全 API

## 参考

- MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/Location/assign
- OWASP Cheat Sheet Series（见知识库 security 分类）

