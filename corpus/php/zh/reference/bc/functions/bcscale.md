---
id: "zh-php-function-function-bcscale"
language: "php"
lang: "zh"
category: "function"
name: "bcscale"
title: "设置/获取所有 bc math 函数的默认小数点保留位数"
signature: "int bcscale(int $scale)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcscale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取所有 bc math 函数的默认小数点保留位数

## 说明

```php
int bcscale(int $scale)
```

设置所有 bc math 函数在未设定情况下的小数点保留位数。

```php
int bcscale(null $scale = null)
```

获取当前的小数点保留位数。

## 参数

- **`$scale`** — 小数点保留位数。

## 返回值

设置的时候，返回之前的小数点保留位数。否则就是返回当前的位数。

## 错误／异常

如果 `$scale` 超出有效范围，函数抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |
| 7.3.0 | 现在 `bcscale()` 不仅可以设置，还可以获取当前的小数点保留位数。 用于设置的时候，现在会返回之前的位数。 之前 `$scale` 是强制的参数， 且 `bcscale()` 总是返回 `true`。 |

## 示例

**`bcscale()` 示例**

```php


<?php

// 默认小数点位数： 3
bcscale(3);
echo bcdiv('105', '6.55957'); // 16.007

// 不调用 bcscale() 也一样
echo bcdiv('105', '6.55957', 3); // 16.007

?>

    
```
