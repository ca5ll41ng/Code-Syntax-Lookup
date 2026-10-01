---
id: "zh-php-function-function-trait-exists"
language: "php"
lang: "zh"
category: "function"
name: "trait_exists"
title: "检查指定的 trait 是否存在"
signature: "bool trait_exists(string $trait, bool $autoload = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.trait-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查指定的 trait 是否存在

## 说明

```php
bool trait_exists(string $trait, bool $autoload = true)
```

## 参数

- **`$trait`** — 待检查的 trait 的名称
- **`$autoload`** — 如果尚未加载，是否使用自动加载（autoload）。

## 返回值

如果 trait 存在返回 `true`，否则返回 `false`。
