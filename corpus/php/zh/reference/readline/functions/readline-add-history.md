---
id: "zh-php-function-function-readline-add-history"
language: "php"
lang: "zh"
category: "function"
name: "readline_add_history"
title: "添加一行到历史"
signature: "true readline_add_history(string $prompt)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-add-history.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加一行到历史

## 说明

```php
true readline_add_history(string $prompt)
```

此函数添加一行到命令行历史。

## 参数

- **`$prompt`** — 添加到历史中的行。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 返回值类型现在是 `true`；之前是 `bool`。 |
