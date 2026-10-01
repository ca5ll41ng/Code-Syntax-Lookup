---
id: "zh-php-function-function-preg-grep"
language: "php"
lang: "zh"
category: "function"
name: "preg_grep"
title: "返回匹配模式的数组条目"
signature: "array|false preg_grep(string $pattern, array $array, int $flags = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-grep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回匹配模式的数组条目

## 说明

```php
array|false preg_grep(string $pattern, array $array, int $flags = 0)
```

返回给定数组`$array`中与模式`$pattern` 匹配的元素组成的数组。

## 参数

- **`$pattern`** — 要搜索的模式，字符串形式。
- **`$array`** — 输入数组。
- **`$flags`** — 如果设置为`PREG_GREP_INVERT`，这个函数返回输入数组中与 给定模式`$pattern`*不*匹配的元素组成的数组。

## 返回值

返回使用`$array`中key做索引的数组。 或者在失败时返回 `false`。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 示例

**`preg_grep()` 示例**

```php


<?php
$array = [ "4", M_PI, "2.74", 42 ];

// 返回所有包含浮点数的元素
$fl_array = preg_grep("/^(\d+)?\.\d+$/", $array);

var_dump($fl_array);
?>

    
```

## 参见

PCRE 模式 `preg_quote()` `preg_match_all()` `preg_filter()` `preg_last_error()`
