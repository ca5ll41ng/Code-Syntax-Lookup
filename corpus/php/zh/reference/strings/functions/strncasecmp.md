---
id: "zh-php-function-function-strncasecmp"
language: "php"
lang: "zh"
category: "function"
name: "strncasecmp"
title: "二进制安全比较字符串开头的若干个字符（不区分大小写）"
signature: "int strncasecmp(string $string1, string $string2, int $length)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strncasecmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全比较字符串开头的若干个字符（不区分大小写）

## 说明

```php
int strncasecmp(string $string1, string $string2, int $length)
```

该函数与 `strcasecmp()` 类似，不同之处在于可以指定两个字符串比较时使用的长度（即最大比较长度）。

## 参数

- **`$string1`** — 第一个字符串。
- **`$string2`** — 第二个字符串。
- **`$length`** — 最大比较长度。

## 返回值

如果 `$string1` 小于 `$string2`，则返回小于 0 的值； 如果 `$string1` 大于 `$string2`，则返回大于 0 的值； 如果它们相等，则返回 `0`。 除了它的符号外，不能从返回值中可靠推断出任何特定的含义。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 当字符串长度不相等时，此函数不再保证返回 `strlen($string1) - strlen($string2)`， 而可能返回 `-1` 或 `1`。 |

## 示例

**`strncasecmp()` 示例**

```php


<?php

$var1 = 'Hello John';
$var2 = 'hello Doe';
if (strncasecmp($var1, $var2, 5) === 0) {
    echo 'First 5 characters of $var1 and $var2 are equals in a case-insensitive string comparison';
}
?>

    
```

## 参见

`strncmp()` `preg_match()` `substr_compare()` `strcasecmp()` `stristr()` `substr()`
