---
id: "zh-php-function-function-tan"
language: "php"
lang: "zh"
category: "function"
name: "tan"
title: "正切"
signature: "float tan(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.tan.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 正切

## 说明

```php
float tan(float $num)
```

`tan()` 返回参数 `$num` 的正切值。参数 `$num` 的单位为弧度。

## 参数

- **`$num`** — 要处理的以弧度为单位的参数

## 返回值

`$num` 的正切值

## 示例

**`tan()` 示例**

```php


<?php

echo tan(M_PI_4); // 1

?>

    
```

## 参见

`atan()` `atan2()` `sin()` `cos()` `tanh()` `deg2rad()`
