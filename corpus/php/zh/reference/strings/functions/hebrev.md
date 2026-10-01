---
id: "zh-php-function-function-hebrev"
language: "php"
lang: "zh"
category: "function"
name: "hebrev"
title: "将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）"
signature: "string hebrev(string $string, int $max_chars_per_line = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.hebrev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）

## 说明

```php
string hebrev(string $string, int $max_chars_per_line = 0)
```

将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）

函数将会尝试避免破坏单词。

## 参数

- **`$string`** — 逻辑顺序希伯来文字符串。
- **`$max_chars_per_line`** — 可选参数，表示每行可返回的最多字符数。

## 返回值

返回视觉顺序字符串。

## 参见

`hebrevc()`
