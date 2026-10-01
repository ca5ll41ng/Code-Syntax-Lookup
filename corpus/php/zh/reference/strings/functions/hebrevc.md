---
id: "zh-php-function-function-hebrevc"
language: "php"
lang: "zh"
category: "function"
name: "hebrevc"
title: "将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew），并且转换换行符"
signature: "string hebrevc(string $hebrew_text, int $max_chars_per_line = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.hebrevc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew），并且转换换行符

## 说明

```php
string hebrevc(string $hebrew_text, int $max_chars_per_line = 0)
```

本函数与`hebrev()` 一样，唯一的区别是 本函数会额外将换行符(\n)转换为"<br>\n"。

函数将会尝试避免破坏单词。

## 参数

- **`$hebrew_text`** — 逻辑顺序希伯来文字符串。
- **`$max_chars_per_line`** — 可选参数，表示每行可返回的最多字符数。

## 返回值

返回视觉顺序字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.4.0 | 此函数已废弃。 |

## 参见

`hebrev()`
