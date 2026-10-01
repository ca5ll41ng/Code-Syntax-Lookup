---
id: "zh-php-function-function-array-last"
language: "php"
lang: "zh"
category: "function"
name: "array_last"
title: "获取数组的最后一个值"
signature: "mixed array_last(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取数组的最后一个值

## 说明

```php
mixed array_last(array $array)
```

获取指定 `$array` 的最后一个值。

## 参数

- **`$array`** — 数组。

## 返回值

如果数组非空，则返回 `$array` 的最后一个值；否则返回 `null`。

## 示例

**基础 `array_last()` 用法**

```php


<?php
$array = [1 => 'a', 0 => 'b', 3 => 'c', 2 => 'd'];

$lastValue = array_last($array);

var_dump($lastValue);
?>

   
```

以上示例会输出：

```text


string(1) "d"

   
```

## 参见

 `array_key_last()` `array_first()`
