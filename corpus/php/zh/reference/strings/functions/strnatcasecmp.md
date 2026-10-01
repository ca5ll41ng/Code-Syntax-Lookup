---
id: "zh-php-function-function-strnatcasecmp"
language: "php"
lang: "zh"
category: "function"
name: "strnatcasecmp"
title: "使用“自然顺序”算法比较字符串（不区分大小写）"
signature: "int strnatcasecmp(string $string1, string $string2)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strnatcasecmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用“自然顺序”算法比较字符串（不区分大小写）

## 说明

```php
int strnatcasecmp(string $string1, string $string2)
```

该函数实现了以人类习惯对数字型字符串进行排序的比较算法。除了不区分大小写，该函数的行为与 `strnatcmp()` 类似。更多信息，参见：Martin Pool 的[自然顺序的字符串比较]()页面。

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

**`strnatcasecmp()` 示例**

```php


<?php

var_dump(strnatcasecmp('Apple', 'Banana'));
var_dump(strnatcasecmp('Banana', 'Apple'));
var_dump(strnatcasecmp('apple', 'Apple'));
?>

    
```

以上示例会输出：

```text


int(-1)
int(1)
int(0)

    
```

## 参见

`preg_match()` `strcmp()` `strcasecmp()` `substr()` `stristr()` `strncasecmp()` `strncmp()` `strstr()` `setlocale()`
