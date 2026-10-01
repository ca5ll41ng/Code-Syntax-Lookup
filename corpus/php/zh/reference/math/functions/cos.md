---
id: "zh-php-function-function-cos"
language: "php"
lang: "zh"
category: "function"
name: "cos"
title: "余弦"
signature: "float cos(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.cos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 余弦

## 说明

```php
float cos(float $num)
```

`cos()` 返回参数 `$num` 的余弦值。参数 `$num` 的单位为弧度。

## 参数

- **`$num`** — 以弧度表示的角度

## 返回值

`$num` 的余弦值

## 示例

**`cos()` 示例**

```php


<?php

echo cos(M_PI); // -1

?>

    
```

## 参见

`acos()` `sin()` `tan()` `deg2rad()`
