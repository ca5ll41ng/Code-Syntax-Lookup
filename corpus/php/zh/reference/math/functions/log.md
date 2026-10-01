---
id: "zh-php-function-function-log"
language: "php"
lang: "zh"
category: "function"
name: "log"
title: "自然对数"
signature: "float log(float $num, float $base = M_E)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 自然对数

## 说明

```php
float log(float $num, float $base = M_E)
```

如果指定了可选的参数 `$base`，`log()` 返回 logbase `$num`，否则 `log()` 返回参数 `$num` 的自然对数。

## 参数

- **`$num`** — 要计算对数的值
- **`$base`** — 可选的底数（默认是“e”，也可以说是自然对数）。

## 返回值

以 `$base` 为底 `$num` 的对数，如果未指定 `$num` 则为自然对数。

## 参见

`log10()` `exp()` `pow()` `error_log()`
