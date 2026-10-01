---
id: "zh-php-function-function-fnmatch"
language: "php"
lang: "zh"
category: "function"
name: "fnmatch"
title: "用模式匹配文件名"
signature: "bool fnmatch(string $pattern, string $filename, int $flags = 0)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fnmatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用模式匹配文件名

## 说明

```php
bool fnmatch(string $pattern, string $filename, int $flags = 0)
```

`fnmatch()` 检查传入的 `$filename` 是否匹配给出的 shell 通配符 `$pattern`。

## 参数

- **`$pattern`** — 要匹配的 `$pattern`。通常，`$pattern` 将包含匹配符，像 `'?'` 和 `'*'`。 | 匹配符 | 说明 | | --- | --- | | `?` | 问号将匹配任何单个字符。比如，模式 `"file?.txt"` 将匹配 `"file1.txt"` 和 `"fileA.txt"`，但不会匹配 `"file10.txt"`。 | | `*` | 星号将匹配零或多个字符。例如 `"foo*.xml"` 将匹配 `"foo.xml"` 和 `"foobar.xml"`。 | | `[ ]` | 中括号用于创建 ASCII 码点范围或字符集。例如，模式 `"index.php[45]"` 将匹配 `"index.php4"` 和 `"index.php5"`，但不会匹配 `"index.phpt"`。众所周知的范围是 `[0-9]`、`[a-z]` 和 `[A-Z]`。可以同时使用多个集合和范围，例如 `[0-9a-zABC]`。 | | `!` | 感叹号用于否定中括号内的字符。例如，`"[!A-Z]*.html"` 将匹配 `"demo.html"`，但不会匹配 `"Demo.html"`。 | | `\` | 反斜线用于转义特殊字符。例如 `"Name\?"` 将匹配 `"Name?"` ，但不会匹配 `"Names"`。 |
- **`$filename`** — 要检查的字符串。 此函数对于文件名尤其有用，但也可以用于普通的字符串。 — 普通用户可能习惯于 shell 模式或者至少在最简单的形式下使用 `'?'` 和 `'*'` 通配符， 因此在前端搜索表达式输入中，使用 `fnmatch()` 来代替 `preg_match()` 对于非编程用户更加方便。
- **`$flags`** — `$flags` 值可以是下列 flag 的任意组合，并用位运算符 OR (|) 连接。 | `$Flag` | 说明 | | --- | --- | | `FNM_NOESCAPE` | 禁用反斜线转义。 | | `FNM_PATHNAME` | Slash in string only matches slash in the given pattern. | | `FNM_PERIOD` | Leading period in string must be exactly matched by period in the given pattern. | | `FNM_CASEFOLD` | Caseless match. Part of the GNU extension. |

## 返回值

匹配则返回 `true`，否则返回 `false`。

## 示例

**用 shell 中的通配符模式匹配来检查颜色名称**

```php


<?php
if (fnmatch("*gr[ae]y", $color)) {
  echo "some form of gray ...";
}
?>

    
```

## 注释

> 目前该函数无法在 Windows 或其它非 POSIX 兼容的系统上使用。

## 参见

`glob()` `preg_match()` `sscanf()` `printf()` `sprintf()`
