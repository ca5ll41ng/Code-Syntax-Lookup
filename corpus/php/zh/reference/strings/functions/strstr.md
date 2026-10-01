---
id: "zh-php-function-function-strstr"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1,2]}
name: "strstr"
title: "查找字符串的首次出现"
signature: "string|false strstr(string $haystack, string $needle, bool $before_needle = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strstr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串的首次出现

## 说明

```php
string|false strstr(string $haystack, string $needle, bool $before_needle = false)
```

返回 `$haystack` 字符串从 `$needle` 第一次出现的位置开始到 `$haystack` 结尾的字符串。

> 该函数区分大小写。如果想要不区分大小写，请使用 `stristr()`。

> 如果只需要确定特定的 `$needle` 是否存在于 `$haystack` 中，应该使用更快且更少占用内存的 `str_contains()` 函数。

## 参数

- **`$haystack`** — 输入字符串。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$before_needle`** — 若为 `true`，`strstr()` 将返回 `$needle` 在 `$haystack` 中的位置之前的部分。

## 返回值

返回字符串的一部分或者 `false`（如果未发现 `$needle`）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持传递 `integer` 作为 `$needle`。 |
| 7.3.0 | 弃用传递 `integer` 作为 `$needle`。 |

## 示例

**`strstr()` 示例**

```php


<?php
$email  = 'name@example.com';
$domain = strstr($email, '@');
echo $domain, PHP_EOL; // 打印 @example.com

$user = strstr($email, '@', true);
echo $user, PHP_EOL; // 打印 name
?>

    
```

## 参见

`preg_match()` `stristr()` `strpos()` `strrchr()` `substr()`
