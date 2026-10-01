---
id: "zh-php-function-function-strcasecmp"
language: "php"
lang: "zh"
category: "function"
name: "strcasecmp"
title: "二进制安全比较字符串（不区分大小写）"
signature: "int strcasecmp(string $string1, string $string2)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strcasecmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全比较字符串（不区分大小写）

## 说明

```php
int strcasecmp(string $string1, string $string2)
```

二进制安全比较字符串（不区分大小写）。比较不会注意区域；只有 ASCII 字母以不区分大小写的方式进行比较。

## 参数

- **`$string1`** — 第一个字符串
- **`$string2`** — 第二个字符串

## 返回值

如果 `$string1` 小于 `$string2`，则返回小于 0 的值； 如果 `$string1` 大于 `$string2`，则返回大于 0 的值； 如果它们相等，则返回 `0`。 除了它的符号外，不能从返回值中可靠推断出任何特定的含义。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 当字符串长度不相等时，此函数不再保证返回 `strlen($string1) - strlen($string2)`， 而可能返回 `-1` 或 `1`。 |

## 示例

**`strcasecmp()` 示例**

```php


<?php
$var1 = "Hello";
$var2 = "hello";
if (strcasecmp($var1, $var2) == 0) {
    echo '$var1 is equal to $var2 in a case-insensitive string comparison';
}
?>

    
```

## 参见

`strcmp()` `preg_match()` `substr_compare()` `strncasecmp()` `stristr()` `substr()`
