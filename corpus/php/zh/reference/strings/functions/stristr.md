---
id: "zh-php-function-function-stristr"
language: "php"
lang: "zh"
category: "function"
name: "stristr"
title: "`strstr()` 函数的忽略大小写版本"
signature: "string|false stristr(string $haystack, string $needle, bool $before_needle = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.stristr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `strstr()` 函数的忽略大小写版本

## 说明

```php
string|false stristr(string $haystack, string $needle, bool $before_needle = false)
```

返回 `$haystack` 字符串从 `$needle` 第一次出现的位置开始到结尾的字符串。

## 参数

- **`$haystack`** — 在该字符串中查找。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$before_needle`** — 若为 `true`，`strstr()` 将返回 `$needle` 在 `$haystack` 中的位置之前的部分(不包括 needle)。

参数 `$needle` 和 `$haystack` 将以不区分大小写的方式对待。

## 返回值

返回匹配的子字符串。如果 `$needle` 未找到，返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会进行 ASCII 大小写转换。非 ASCII 字节值将通过它们的字节值进行比较。 |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持 `integer` 传递给 `$needle`。 |
| 7.3.0 | 弃用 `integer` 传递给 `$needle`。 |

## 示例

**`stristr()` 示例**

```php


<?php
  $email = 'USER@EXAMPLE.com';
  echo stristr($email, 'e'), PHP_EOL; // 输出 ER@EXAMPLE.com
  echo stristr($email, 'e', true), PHP_EOL; // 输出 US
?>

    
```

**测试字符串的存在与否**

```php


<?php
  $string = 'Hello World!';
  if (stristr($string, 'earth') === FALSE) {
    echo '"earth" not found in string';
  }
// 输出："earth" not found in string
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strstr()` `strrchr()` `stripos()` `strpbrk()` `preg_match()`
