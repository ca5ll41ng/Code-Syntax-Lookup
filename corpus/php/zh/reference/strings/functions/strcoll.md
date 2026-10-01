---
id: "zh-php-function-function-strcoll"
language: "php"
lang: "zh"
category: "function"
name: "strcoll"
title: "基于区域设置的字符串比较"
signature: "int strcoll(string $string1, string $string2)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strcoll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 基于区域设置的字符串比较

## 说明

```php
int strcoll(string $string1, string $string2)
```

注意该比较区分大小写。和 `strcmp()` 不同，该函数不是二进制安全的。

`strcoll()` 使用当前区域设置进行比较。如果当前区域为 C 或 POSIX，该函数等同于 `strcmp()`。

## 参数

- **`$string1`** — 第一个字符串。
- **`$string2`** — 第二个字符串。

## 返回值

如果 `$string1` 小于 `$string2` 返回 < 0； 如果 `$string1` 大于 `$string2` 返回 > 0；如果两者相等，返回 0。

## 参见

`preg_match()` `strcmp()` `strcasecmp()` `substr()` `stristr()` `strncasecmp()` `strncmp()` `strstr()` `setlocale()`
