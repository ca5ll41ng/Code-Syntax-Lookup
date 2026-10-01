---
id: "zh-php-function-function-array-is-list"
language: "php"
lang: "zh"
category: "function"
name: "array_is_list"
title: "判断指定 `$array` 是否为 list"
signature: "bool array_is_list(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-is-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断指定 `$array` 是否为 list

## 说明

```php
bool array_is_list(array $array)
```

判断指定的 `$array` 是否是 list。如果 `array` 的 key 由 `0` 到 `count($array)-1` 的连续数字组成，则该数组就是 list。

## 参数

- **`$array`** — 被检测的 `array`。

## 返回值

如果 `$array` 是 list 就返回 `true`，否则返回 `false`。

## 示例

**`array_is_list()` 示例**

```php


<?php
var_dump(array_is_list([])); // true
var_dump(array_is_list(['apple', 2, 3])); // true
var_dump(array_is_list([0 => 'apple', 'orange'])); // true

// key 未从 0 开始
var_dump(array_is_list([1 => 'apple', 'orange'])); // false

// key 的顺序不正确
var_dump(array_is_list([1 => 'apple', 0 => 'orange'])); // false

// 包含非整数 key
var_dump(array_is_list([0 => 'apple', 'foo' => 'bar'])); // false

// 非连续 key
var_dump(array_is_list([0 => 'apple', 2 => 'bar'])); // false
?>

    
```

## 注释

> 空数组也会返回 `true`。

## 参见

`array_values()`
