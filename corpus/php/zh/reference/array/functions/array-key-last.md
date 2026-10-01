---
id: "zh-php-function-function-array-key-last"
language: "php"
lang: "zh"
category: "function"
name: "array_key_last"
title: "获取一个数组的最后一个键值"
signature: "int|string|null array_key_last(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-key-last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个数组的最后一个键值

## 说明

```php
int|string|null array_key_last(array $array)
```

取得指定数组的 `$array` 最后一个键值，不会影响到原数组的内部指针。

## 参数

- **`$array`** — 要操作的数组。

## 返回值

返回 `$array` 的最后一个键值（如果不为空），否则返回 `null`。

## 参见

 `array_last()` `array_key_first()` `end()`
