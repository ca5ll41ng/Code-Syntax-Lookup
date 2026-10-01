---
id: "zh-php-function-function-sin"
language: "php"
lang: "zh"
category: "function"
name: "sin"
title: "正弦"
signature: "float sin(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.sin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 正弦

## 说明

```php
float sin(float $num)
```

`sin()` 返回参数 `$num` 的正弦值。参数 `$num` 的单位为弧度。

## 参数

- **`$num`** — 单位是弧度的值。

## 返回值

`$num` 的正弦值

## 示例

**`sin()` 示例**

```php


<?php
// 返回值的精度由配置中的 precision 指示确定
echo sin(deg2rad(60)), PHP_EOL;  //  0.866025403 ...
echo sin(60), PHP_EOL;           // -0.304810621 ...

?>

    
```

## 参见

`asin()` `sinh()` `cos()` `tan()` `deg2rad()`
