---
id: "zh-php-function-function-str-ireplace"
language: "php"
lang: "zh"
category: "function"
name: "str_ireplace"
title: "`str_replace()` 的忽略大小写版本"
signature: "string|array str_ireplace(array|string $search, array|string $replace, string|array $subject, int $count = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-ireplace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `str_replace()` 的忽略大小写版本

## 说明

```php
string|array str_ireplace(array|string $search, array|string $replace, string|array $subject, int $count = null)
```

该函数返回字符串或者数组。该字符串或数组是将 `$subject` 中全部的 `$search` 都被 `$replace` 替换（忽略大小写）之后的结果。

要根据模式而不是固定字符串替换文本，将 `preg_replace()` 与 `i` 模式修饰符一起使用。

## 参数

如果 `$search` 和 `$replace` 为数组，那么 `str_ireplace()` 将对 `$subject` 做二者的映射替换。如果 `$replace` 的值的个数少于 `$search` 的个数，多余的替换将使用空字符串来进行。如果 `$search` 是一个数组而 `$replace` 是一个字符串，那么 `$search` 中每个元素的替换将始终使用这个字符串。

如果 `$search` 或 `$replace` 是数组，他们的元素将从头到尾一个个处理。

- **`$search`** — 要搜索的值，就像是 *needle*。可以使用 array 来提供多个 needle。
- **`$replace`** — `$search` 的替换值。一个数组可以被用来指定多重替换。
- **`$subject`** — 要被搜索和替换的字符串或数组，就像是 *haystack*。 — 如果 `$subject` 是一个数组，替换操作将遍历整个 `$subject`，并且也将返回一个数组。
- **`$count`** — 如果被指定，它的值将被设置为替换发生的次数。

## 返回值

返回替换后的字符串或者数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会进行 ASCII 大小写转换。非 ASCII 字节值将通过它们的字节值进行比较。 |

## 示例

**`str_ireplace()` 示例**

```php


<?php
$bodytag = str_ireplace("%body%", "black", "<body text=%BODY%>");
echo $bodytag; // <body text=black>
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

> 替换顺序陷阱
>
> 因为 `str_ireplace()` 是从左到右替换，当进行多个替换时，可能会替换先前插入的值。`str_replace()` 文档中的示例 #2 展示了在实践中受到的影响。

## 参见

`str_replace()` `preg_replace()` `strtr()`
