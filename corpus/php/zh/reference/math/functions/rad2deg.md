---
id: "zh-php-function-function-rad2deg"
language: "php"
lang: "zh"
category: "function"
name: "rad2deg"
title: "将弧度数转换为相应的角度数"
signature: "float rad2deg(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.rad2deg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将弧度数转换为相应的角度数

## 说明

```php
float rad2deg(float $num)
```

本函数将 `$num` 从弧度转换为角度。

## 参数

- **`$num`** — 一个弧度值

## 返回值

`$num` 相应的角度数

## 示例

**`rad2deg()` 示例**

```php


<?php

echo rad2deg(M_PI_4); // 45

?>

    
```

## 参见

`deg2rad()`
