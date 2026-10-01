---
id: "zh-php-function-function-strcmp"
language: "php"
lang: "zh"
category: "function"
name: "strcmp"
title: "二进制安全字符串比较"
signature: "int strcmp(string $string1, string $string2)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strcmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 二进制安全字符串比较

## 说明

```php
int strcmp(string $string1, string $string2)
```

注意该比较区分大小写。 对于不区分大小写的比较，请参见 `strcasecmp()`。

注意该比较不支持区域设置。如需支持区域设置的比较，请参见 `strcoll()` 或 `Collator::compare()`

## 参数

- **`$string1`** — 第一个字符串。
- **`$string2`** — 第二个字符串。

## 返回值

如果 `$string1` 小于 `$string2`，则返回小于 0 的值； 如果 `$string1` 大于 `$string2`，则返回大于 0 的值； 如果它们相等，则返回 `0`。 除了它的符号外，不能从返回值中可靠推断出任何特定的含义。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 当字符串长度不相等时，此函数不再保证返回 `strlen($string1) - strlen($string2)`， 而可能返回 `-1` 或 `1`。 |

## 示例

**`strcmp()` 例子**

```php


<?php
$var1 = "Hello";
$var2 = "hello";
if (strcmp($var1, $var2) !== 0) {
    echo '$var1 is not equal to $var2 in a case sensitive string comparison';
}
?>

    
```

## 参见

- 完整字符串比较 `strcasecmp()` `Collator::compare()` `strcoll()`
- 部分字符串比较 `substr_compare()` `strncmp()` `strstr()`
- 相似/其他字符串比较 `preg_match()` `levenshtein()` `metaphone()` `similar_text()` `soundex()`
