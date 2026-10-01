---
id: "zh-php-function-function-count-chars"
language: "php"
lang: "zh"
category: "function"
name: "count_chars"
title: "返回字符串所用字符的信息"
signature: "array|string count_chars(string $string, int $mode = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.count-chars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符串所用字符的信息

## 说明

```php
array|string count_chars(string $string, int $mode = 0)
```

统计 `$string` 中每个字节值（0..255）出现的次数，使用多种模式返回结果。

## 参数

- **`$string`** — 需要统计的字符串。
- **`$mode`** — 参见返回的值。

## 返回值

根据不同的 `$mode`，`count_chars()` 返回下列不同的结果：

- 0 - 以所有的每个字节值作为键名，出现次数作为值的数组。
- 1 - 与 0 相同，但只列出出现次数大于零的字节值。
- 2 - 与 0 相同，但只列出出现次数等于零的字节值。
- 3 - 返回由所有使用了的字节值组成的字符串。
- 4 - 返回由所有未使用的字节值组成的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 在此版本之前，函数在失败时返回 `false`。 |

## 示例

**`count_chars()` 示例**

```php


<?php
$data = "Two Ts and one F.";

foreach (count_chars($data, 1) as $i => $val) {
   echo "There were $val instance(s) of \"" , chr($i) , "\" in the string.\n";
}
?>

    
```

以上示例会输出：

```text


There were 4 instance(s) of " " in the string.
There were 1 instance(s) of "." in the string.
There were 1 instance(s) of "F" in the string.
There were 2 instance(s) of "T" in the string.
There were 1 instance(s) of "a" in the string.
There were 1 instance(s) of "d" in the string.
There were 1 instance(s) of "e" in the string.
There were 2 instance(s) of "n" in the string.
There were 2 instance(s) of "o" in the string.
There were 1 instance(s) of "s" in the string.
There were 1 instance(s) of "w" in the string.

    
```

## 参见

`strpos()` `substr_count()`
