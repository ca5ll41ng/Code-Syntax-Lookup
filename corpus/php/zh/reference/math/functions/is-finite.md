---
id: "zh-php-function-function-is-finite"
language: "php"
lang: "zh"
category: "function"
name: "is_finite"
title: "判断浮点数是否是有效的有限值"
signature: "bool is_finite(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.is-finite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断浮点数是否是有效的有限值

## 说明

```php
bool is_finite(float $num)
```

返回指定的 `$num` 是否是有限浮点数。

有限浮点数既不是 `NAN`（`is_nan()`）也不是无限的（`is_infinite()`）。

## 参数

- **`$num`** — 要检查的 `float`

## 返回值

如果 `$num` 不是 `NAN`、`INF` 或 -`INF`，那么为 `true`，否则为 `false`。

## 示例

**`is_finite()` 示例**

```php


<?php
$float = 1.2345;
var_dump($float, is_finite($float));

$nan = sqrt(-1);
var_dump($nan, is_finite($nan));

$inf = 1e308 * 2;
var_dump($inf, is_finite($inf));
?>

    
```

以上示例会输出：

```text


float(1.2345)
bool(true)
float(NAN)
bool(false)
float(INF)
bool(false)

    
```

## 参见

`is_infinite()` `is_nan()`
