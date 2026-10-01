---
id: "zh-php-function-function-array-search"
language: "php"
lang: "zh"
category: "function"
name: "array_search"
title: "在数组中搜索给定的值，如果成功则返回首个相应的键名"
signature: "int|string|false array_search(mixed $needle, array $haystack, bool $strict = false)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-search.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在数组中搜索给定的值，如果成功则返回首个相应的键名

## 说明

```php
int|string|false array_search(mixed $needle, array $haystack, bool $strict = false)
```

在 `$haystack` 中搜索 `$needle`。

## 参数

- **`$needle`** — 搜索的值。
  > 如果 `$needle` 是字符串，则比较以区分大小写的方式进行。


- **`$haystack`** — 这个数组。
- **`$strict`** — 如果可选的第三个参数 `$strict` 为 `true`，则 `array_search()` 将在 `$haystack` 中检查*完全相同*的元素。 这意味着同样严格比较 `$haystack` 里 `$needle` 的 类型，并且对象需是同一个实例。

## 返回值

如果找到了 `$needle` 则返回它的键，否则返回 `false`。

如果 `$needle` 在 `$haystack` 中出现不止一次，则返回第一个匹配的键。要返回所有匹配值的键，应该用 `array_keys()` 加上可选参数 `$filter_value` 来代替。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 示例

**`array_search()` 例子**

```php


<?php
$array = array(0 => 'blue', 1 => 'red', 2 => 'green', 3 => 'red');

$key = array_search('green', $array); // $key = 2;
print_r($key);

$key = array_search('red', $array);   // $key = 1;
print_r($key);
?>

    
```

## 参见

`array_keys()` `array_values()` `array_key_exists()` `in_array()`
