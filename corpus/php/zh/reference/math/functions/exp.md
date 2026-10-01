---
id: "zh-php-function-function-exp"
language: "php"
lang: "zh"
category: "function"
name: "exp"
title: "计算 `e` 的指数"
signature: "float exp(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.exp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算 `e` 的指数

## 说明

```php
float exp(float $num)
```

返回 `e` 的 `$num` 次方值。

> 用“`e`”作为自然对数的底数，大约为 2.718282。

## 参数

- **`$num`** — 要处理的参数

## 返回值

'e' raised to the power of `$num`

## 示例

**`exp()` 示例**

```php


<?php
echo exp(12), PHP_EOL;
echo exp(5.7);
?>

    
```

以上示例会输出：

```text


162754.791419
298.86740096706

    
```

## 参见

`log()` `pow()`
