---
id: "zh-php-function-function-implode"
language: "php"
lang: "zh"
category: "function"
name: "implode"
title: "用字符串连接数组元素"
signature: "string implode(string $separator, array $array)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.implode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用字符串连接数组元素

## 说明

```php
string implode(string $separator, array $array)
```

替代写法（不支持命名参数）：

```php
string implode(array $array)
```

遗留写法（从 PHP 7.4.0 起废弃，从 PHP 8.0.0 中移除）：

```php
string implode(array $array, string $separator)
```

用一个 `$separator` 字符串连接数组元素。

## 参数

- **`$separator`** — 可选。默认为空字符串。
- **`$array`** — 要使用字符串连接的数组。

## 返回值

返回一个包含所有数组元素并且顺序相同的字符串， 每个元素之间有 separator 分隔。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 在 `$array` 之后传递 `$separator` 已不再支持。 |
| 7.4.0 | 在 `$array` 之后传递 `$separator` （即：使用遗留写法）已被废弃。 |

 }}} 

## 示例

**`implode()` 例子**

```php


<?php

$array = ['lastname', 'email', 'phone'];
var_dump(implode(",", $array)); // string(20) "lastname,email,phone"

// Empty string when using an empty array:
var_dump(implode('hello', [])); // string(0) ""

// The separator is optional:
var_dump(implode(['a', 'b', 'c'])); // string(3) "abc"

?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`explode()` `preg_split()` `http_build_query()`
