---
id: "zh-php-function-function-strpos"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "strpos"
title: "查找字符串首次出现的位置"
signature: "int|false strpos(string $haystack, string $needle, int $offset = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串首次出现的位置

## 说明

```php
int|false strpos(string $haystack, string $needle, int $offset = 0)
```

返回 `$needle` 在 `$haystack` 中首次出现的数字位置。

## 参数

- **`$haystack`** — 在该字符串中进行查找。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$offset`** — 如果提供了此参数，搜索会从字符串该字符数的起始位置开始统计。 如果是负数，搜索会从字符串结尾指定字符数开始。

## 返回值

返回 needle 存在于 `$haystack` 字符串起始的位置(独立于 `$offset`)。 同时注意字符串位置是从`0`开始，而不是从`1`开始的。

如果没找到 needle，将返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持 `integer` 传入 `$needle`。 |
| 7.3.0 | 弃用 `integer` 传入 `$needle`。 |
| 7.1.0 | 开始支持负数的 `$offset`。 |

## 示例

**使用 `===`**

```php


<?php
$mystring = 'abc';
$findme   = 'a';
$pos = strpos($mystring, $findme);

// 注意这里使用的是 ===。简单的 == 不能像我们期待的那样工作，
// 因为 'a' 是第 0 位置上的（第一个）字符。
if ($pos === false) {
    echo "The string '$findme' was not found in the string '$mystring'";
} else {
    echo "The string '$findme' was found in the string '$mystring'";
    echo " and exists at position $pos";
}
?>

    
```

**使用 !==**

```php


<?php
$mystring = 'abc';
$findme   = 'a';
$pos = strpos($mystring, $findme);

// 使用 !== 操作符。使用 != 不能像我们期待的那样工作，
// 因为 'a' 的位置是 0。语句 (0 != false) 的结果是 false。
if ($pos !== false) {
     echo "The string '$findme' was found in the string '$mystring'";
         echo " and exists at position $pos";
} else {
     echo "The string '$findme' was not found in the string '$mystring'";
}
?>

    
```

**使用位置偏移量**

```php


<?php
// 忽视位置偏移量之前的字符进行查找
$newstring = 'abcdef abcdef';
$pos = strpos($newstring, 'a', 1); // $pos = 7, 不是 0

echo $pos, PHP_EOL;
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`stripos()` `str_contains()` `str_ends_with()` `str_starts_with()` `strrpos()` `strripos()` `strstr()` `strpbrk()` `substr()` `preg_match()`
