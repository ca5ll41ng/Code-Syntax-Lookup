---
id: "zh-php-function-function-pi"
language: "php"
lang: "zh"
category: "function"
name: "pi"
title: "得到圆周率值"
signature: "float pi()"
module: "math"
source_url: "https://www.php.net/manual/zh/function.pi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 得到圆周率值

## 说明

```php
float pi()
```

返回圆周率的近似值。也可以使用 `M_PI` 常量，该常量产生与 `pi()` 完全相同的结果。

## 参数

此函数没有参数。

## 返回值

圆周率（pi）的浮点近似值。

## 示例

**`pi()` 示例**

```php


<?php
echo pi(), PHP_EOL; // 3.1415926535898
echo M_PI, PHP_EOL; // 3.1415926535898
?>

    
```
