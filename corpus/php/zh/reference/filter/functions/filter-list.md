---
id: "zh-php-function-function-filter-list"
language: "php"
lang: "zh"
category: "function"
name: "filter_list"
title: "返回所支持的过滤器列表"
signature: "array filter_list()"
module: "filter"
source_url: "https://www.php.net/manual/zh/function.filter-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所支持的过滤器列表

## 说明

```php
array filter_list()
```

## 参数

此函数没有参数。

## 返回值

返回一个所支持的过滤器的名称的列表，如果没有这样子的过滤器的话则返回空数组。这个数组的索引不是过滤器id， 你可以通过 `filter_id()` 去根据名称获取它们。

## 示例

**一个 `filter_list()` 的例子**

```php


<?php
print_r(filter_list());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => int
    [1] => boolean
    [2] => float
    [3] => validate_regexp
    [4] => validate_url
    [5] => validate_email
    [6] => validate_ip
    [7] => string
    [8] => stripped
    [9] => encoded
    [10] => special_chars
    [11] => unsafe_raw
    [12] => email
    [13] => url
    [14] => number_int
    [15] => number_float
    [16] => magic_quotes
    [17] => callback
)

   
```
