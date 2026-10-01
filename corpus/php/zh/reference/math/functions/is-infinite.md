---
id: "zh-php-function-function-is-infinite"
language: "php"
lang: "zh"
category: "function"
name: "is_infinite"
title: "判断浮点数是否为无限值"
signature: "bool is_infinite(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.is-infinite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断浮点数是否为无限值

## 说明

```php
bool is_infinite(float $num)
```

返回指定的 `$num` 是否是 `INF` 或 -`INF`。

## 参数

- **`$num`** — 要检查的 `float`

## 返回值

如果 `$num` 是 `INF` 或 -`INF`，返回 `true`，否则返回 `false`。

## 示例

**`is_infinite()` 示例**

```php


<?php
$inf = 1e308 * 2;

var_dump($inf, is_infinite($inf));

$negative_inf = -$inf;

var_dump($negative_inf, is_infinite($negative_inf));
?>

    
```

以上示例会输出：

```text


float(INF)
bool(true)
float(-INF)
bool(true)

    
```

## 参见

`is_finite()` `is_nan()`
