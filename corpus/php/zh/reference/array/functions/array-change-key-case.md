---
id: "zh-php-function-function-array-change-key-case"
language: "php"
lang: "zh"
category: "function"
name: "array_change_key_case"
title: "将数组中的所有键名修改为全大写或小写"
signature: "array array_change_key_case(array $array, int $case = CASE_LOWER)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-change-key-case.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组中的所有键名修改为全大写或小写

## 说明

```php
array array_change_key_case(array $array, int $case = CASE_LOWER)
```

`array_change_key_case()` 将 `$array` 数组中的所有键名改为全小写或大写。本函数不改变数字索引。

## 参数

- **`$array`** — 需要操作的数组。
- **`$case`** — 可以在这里用两个常量，`CASE_UPPER` 或 `CASE_LOWER`（默认值）。

## 返回值

返回一个键全是小写或者全是大写的数组；

## 示例

**`array_change_key_case()`例一**

```php


<?php
$input_array = array("FirSt" => 1, "SecOnd" => 4);
print_r(array_change_key_case($input_array, CASE_UPPER));
?>

    
```

以上示例会输出：

```text


Array
(
    [FIRST] => 1
    [SECOND] => 4
)

    
```

## 注释

> 如果一个数组中的多个键名经过本函数后变成一样的话（例如 "`keY`" 和 "`kEY`"），最后一个值将覆盖其它的值。
