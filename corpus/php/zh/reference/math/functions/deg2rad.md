---
id: "zh-php-function-function-deg2rad"
language: "php"
lang: "zh"
category: "function"
name: "deg2rad"
title: "将角度转换为弧度"
signature: "float deg2rad(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.deg2rad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将角度转换为弧度

## 说明

```php
float deg2rad(float $num)
```

本函数把 `$num` 从角度转换成弧度。

## 参数

- **`$num`** — 以角度为单位的值

## 返回值

`$num` 等量的弧度值

## 示例

**`deg2rad()` 示例**

```php


<?php

echo deg2rad(45), PHP_EOL; // 0.785398163397
var_dump(deg2rad(45) === M_PI_4); // bool(true)

?>

    
```

## 参见

`rad2deg()`
