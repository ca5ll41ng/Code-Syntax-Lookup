---
id: "zh-php-function-function-substr-compare"
language: "php"
lang: "zh"
category: "function"
name: "substr_compare"
title: "二进制安全比较字符串（从偏移位置比较指定长度）"
signature: "int substr_compare(string $haystack, string $needle, int $offset, int|null $length = null, bool $case_insensitive = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.substr-compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全比较字符串（从偏移位置比较指定长度）

## 说明

```php
int substr_compare(string $haystack, string $needle, int $offset, int|null $length = null, bool $case_insensitive = false)
```

`substr_compare()` 从偏移位置 `$offset` 开始比较 `$haystack` 与 `$needle`，比较长度为 `$length` 个字符。

## 参数

- **`$haystack`** — 待比较的第一个字符串。
- **`$needle`** — 待比较的第二个字符串。
- **`$offset`** — 比较开始的位置。如果为负数，则从字符串结尾处开始算起。
- **`$length`** — 比较的长度。默认值为 `$needle` 的长度与 `$haystack` 的长度减去位置偏移量 `$offset` 后二者中的较大者。
- **`$case_insensitive`** — 如果 `$case_insensitive` 为 `true`，比较将不区分大小写。

## 返回值

如果 `$string1` 小于 `$string2`，则返回小于 0 的值； 如果 `$string1` 大于 `$string2`，则返回大于 0 的值； 如果它们相等，则返回 `0`。 除了它的符号外，不能从返回值中可靠推断出任何特定的含义。

如果 `$offset` 等于（在 PHP 7.2.18, 7.3.5 之前）或大于 `$haystack` 的长度，或设置 `$length` 小于或等于 0，`substr_compare()` 将打印出警告信息并且返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 当字符串长度不相等时，此函数不再保证返回 `strlen($string1) - strlen($string2)`， 而可能返回 `-1` 或 `1`。 |
| 8.0.0 | `$length` 现在允许为 null。 |
| 7.2.18, 7.3.5 | `$offset` 现在可能等于 `$haystack`。 |

## 示例

**`substr_compare()` 示例**

```php


<?php
echo substr_compare("abcde", "bc", 1, 2), PHP_EOL; // 0
echo substr_compare("abcde", "de", -2, 2), PHP_EOL; // 0
echo substr_compare("abcde", "bcg", 1, 2), PHP_EOL; // 0
echo substr_compare("abcde", "BC", 1, 2, true), PHP_EOL; // 0
echo substr_compare("abcde", "bc", 1, 3), PHP_EOL; // 1
echo substr_compare("abcde", "cd", 1, 2), PHP_EOL; // -1
echo substr_compare("abcde", "abc", 5, 1), PHP_EOL; // -1
?>

    
```

## 参见

`strncmp()`
