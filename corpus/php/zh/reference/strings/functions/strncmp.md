---
id: "zh-php-function-function-strncmp"
language: "php"
lang: "zh"
category: "function"
name: "strncmp"
title: "二进制安全比较字符串开头的若干个字符"
signature: "int strncmp(string $string1, string $string2, int $length)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strncmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全比较字符串开头的若干个字符

## 说明

```php
int strncmp(string $string1, string $string2, int $length)
```

该函数与 `strcmp()` 类似，不同之处在于你可以指定两个字符串比较时使用的长度（即最大比较长度）。

注意该比较区分大小写。

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

**`strncmp()` 示例**

```php


<?php

$var1 = 'Hello John';
$var2 = 'Hello Doe';
if (strncmp($var1, $var2, 5) === 0) {
    echo 'First 5 characters of $var1 and $var2 are equal in a case-sensitive string comparison';
}
?>

    
```

## 参见

`strncasecmp()` `preg_match()` `substr_compare()` `strcmp()` `strstr()` `substr()`
