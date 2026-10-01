---
id: "zh-php-function-function-stripos"
language: "php"
lang: "zh"
category: "function"
name: "stripos"
title: "查找字符串首次出现的位置（不区分大小写）"
signature: "int|false stripos(string $haystack, string $needle, int $offset = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.stripos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串首次出现的位置（不区分大小写）

## 说明

```php
int|false stripos(string $haystack, string $needle, int $offset = 0)
```

返回在`字符串` `$haystack` 中 `$needle` 首次出现的数字位置。

与 `strpos()` 不同，`stripos()` 不区分大小写。

## 参数

- **`$haystack`** — 在该字符串中查找。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$offset`** — 可选的 `$offset` 参数，从字符此数量的开始位置进行搜索。 如果是负数，就从字符末尾此数量的字符数开始统计。

## 返回值

返回 needle 存在于 `$haystack` 字符串开始的位置(独立于偏移量)。同时注意字符串位置起始于 0，而不是 1。

如果未发现 needle 将返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会进行 ASCII 大小写转换。非 ASCII 字节值将通过它们的字节值进行比较。 |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.0.0 | 不再支持 `integer` 传递给 `$needle`。 |
| 7.3.0 | 弃用 `integer` 传递给 `$needle`。 |
| 7.1.0 | 开始支持负数的 `$offset`。 |

## 示例

**`stripos()` 示例**

```php


<?php
$findme    = 'a';
$mystring1 = 'xyz';
$mystring2 = 'ABC';

$pos1 = stripos($mystring1, $findme);
$pos2 = stripos($mystring2, $findme);

// 'a' 当然不在 'xyz' 中
if ($pos1 === false) {
    echo "The string '$findme' was not found in the string '$mystring1'", PHP_EOL;
}

// 注意这里使用的是 !==。简单的 != 不能像我们期望的那样工作，
// 因为 'a' 的位置是 0（第一个字符）。
if ($pos2 !== false) {
    echo "We found '$findme' in '$mystring2' at position $pos2", PHP_EOL;
}
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`mb_stripos()` `str_contains()` `str_ends_with()` `str_starts_with()` `strpos()` `strrpos()` `strripos()` `stristr()` `substr()` `str_ireplace()`
