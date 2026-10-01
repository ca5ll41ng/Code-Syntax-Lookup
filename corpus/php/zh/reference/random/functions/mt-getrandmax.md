---
id: "zh-php-function-function-mt-getrandmax"
language: "php"
lang: "zh"
category: "function"
name: "mt_getrandmax"
title: "显示随机数的最大可能值"
signature: "int mt_getrandmax()"
module: "random"
source_url: "https://www.php.net/manual/zh/function.mt-getrandmax.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 显示随机数的最大可能值

## 说明

```php
int mt_getrandmax()
```

返回调用 `mt_rand()` 所能返回的最大的随机数。

## 参数

此函数没有参数。

## 返回值

返回不带参数调用 `mt_rand()` 时获取到的最大随机值，这可用于 `$max` 参数而不是放大结果的最大值（更少的随机）。

## 参见

`mt_rand()` `mt_srand()` `getrandmax()`
