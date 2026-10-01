---
id: "zh-php-function-function-checkdate"
language: "php"
lang: "zh"
category: "function"
name: "checkdate"
title: "验证一个格里高里日期"
signature: "bool checkdate(int $month, int $day, int $year)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.checkdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证一个格里高里日期

## 说明

```php
bool checkdate(int $month, int $day, int $year)
```

检查由参数构成的日期的合法性。如果每个参数都正确定义了则会被认为是有效的。

## 参数

- **`$month`** — month 的值是从 1 到 12。
- **`$day`** — `$Day` 的值在给定的 `$month` 所应该具有的天数范围之内，闰年已经考虑进去了。
- **`$year`** — year 的值是从 1 到 32767。

## 返回值

如果给出的日期有效则返回 `true`，否则返回 `false`。

## 示例

**`checkdate()` 示例**

```php


<?php
var_dump(checkdate(12, 31, 2000));
var_dump(checkdate(2, 29, 2001));

    
```

以上示例会输出：

```text


bool(true)
bool(false)

    
```

## 参见

`mktime()` `strtotime()`
