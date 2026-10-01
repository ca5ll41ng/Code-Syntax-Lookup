---
id: "zh-php-function-function-strrchr"
language: "php"
lang: "zh"
category: "function"
name: "strrchr"
title: "查找指定字符在字符串中的最后一次出现"
signature: "string|false strrchr(string $haystack, string $needle, bool $before_needle = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strrchr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找指定字符在字符串中的最后一次出现

## 说明

```php
string|false strrchr(string $haystack, string $needle, bool $before_needle = false)
```

该函数返回 `$haystack` 字符串中的一部分，这部分以 `$needle` 的最后出现位置开始，直到 `$haystack` 末尾。

## 参数

- **`$haystack`** — 在该字符串中查找。
- **`$needle`** — 如果 `$needle` 包含了多个字符，那么仅使用第一个字符。该行为不同于 `strstr()`。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$before_needle`** — 如果为 `true`，`strrchr()` 返回最后一次出现 `$needle` 之前的 `$haystack` 部分（不包括 needle）。

## 返回值

该函数返回字符串的一部分。如果 `$needle` 未被找到，返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 新增 `$before_needle` 参数。 |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持将 `integer` 作为 `$needle` 传递。 |
| 7.3.0 | 弃用将 `integer` 作为 `$needle` 传递。 |

## 示例

**`strrchr()` 示例**

```php


<?php
$ext = strrchr('somefile.txt', '.');
echo "file extension: $ext \n";
$ext = $ext ? strtolower(substr($ext, 1)) : '';
echo "file extension: $ext";
?>

    
```

以上示例的输出类似于：

```text


file extension: .txt
file extension: txt

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strstr()` `strrpos()`
