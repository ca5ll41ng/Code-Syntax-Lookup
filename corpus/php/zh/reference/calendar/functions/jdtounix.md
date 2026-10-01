---
id: "zh-php-function-function-jdtounix"
language: "php"
lang: "zh"
category: "function"
name: "jdtounix"
title: "将儒略日数转换为 Unix 时间戳"
signature: "int jdtounix(int $julian_day)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jdtounix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将儒略日数转换为 Unix 时间戳

## 说明

```php
int jdtounix(int $julian_day)
```

这个函数将返回与 `$julian_day` 给出的儒略日相对应的 Unix 时间戳。返回的时间是 UTC。

## 参数

- **`$julian_day`** — 儒略日数在 64 位系统上是 `2440588` 到 `106751993607888` 之间的数字，在 32 位系统上是 `2440588` 到 `2465443` 之间的数字。

## 返回值

指定儒略日的开始时（午夜，而非中午）的 unix 时间戳。

## 错误／异常

`$julian_day` 超出允许的范围值，抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数在失败时不再返回 `false`，而是引发 `ValueError`。 |
| 7.3.24, 7.4.12 | 扩充了 `$julian_day` 的上限。以前无论计算机体系结构如何，都是 `2465342`。 |

## 参见

`unixtojd()`
