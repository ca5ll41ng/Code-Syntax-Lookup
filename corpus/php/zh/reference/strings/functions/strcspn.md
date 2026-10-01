---
id: "zh-php-function-function-strcspn"
language: "php"
lang: "zh"
category: "function"
name: "strcspn"
title: "获取不匹配遮罩的起始子字符串的长度"
signature: "int strcspn(string $string, string $characters, int $offset = 0, int|null $length = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strcspn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取不匹配遮罩的起始子字符串的长度

## 说明

```php
int strcspn(string $string, string $characters, int $offset = 0, int|null $length = null)
```

返回 `$string` 中，所有字符都*不*存在于 `$characters` 范围的起始子字符串的长度。

如果省略 `$offset` 和 `$length`，则将检查所有的 `$string`。如果包含前面两个参数，那么跟调用 `strcspn(substr($string, $offset, $length), $characters)` 效果相同（参阅 `function.substr` 获取更新信息）。

## 参数

- **`$string`** — 要检查的字符串。
- **`$characters`** — 包含每个不允许的字符的字符串。
- **`$offset`** — `$string` 开始搜索的位置。 — 如果给出的 `$offset` 是非负数，然后 `strcspn()` 将会从 `$string` 的 `$offset` 位置开始检查字符串。例如。在字符串“`abcdef`”中，位置为 `0` 的字符是“`a`”，位置为 `2` 的字符是“`c`”，等等。 — 如果给出的 `$offset` 是负数，则 `strcspn()` 将会从距离 `$string` 末尾的第 `$offset` 个位置开始检查字符串。
- **`$length`** — 要检查的部分 `$string` 的长度。 — 如果给出的 `$length` 是非负数，然后将检查 `$string` 中起始位置后的 `$length` 字符。 — If `$length` is given and is negative, then `$string` will be examined from the starting position up to `$length` characters from the end of `$string`.

## 返回值

Returns the length of the initial segment of `$string` which consists entirely of characters *not* in `$characters`.

> 当设置了 `$offset` 参数时，返回的长度是从该位置开始计算，而不是从 `$string` 的开头计算。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 在 PHP 8.4.0 之前，当 `$characters` 为空字符串时，搜索会错误地停止在 `$string` 的第一个 null 字节处。 |
| 8.0.0 | `$length` 现在允许为 null。 |

## 示例

**`strcspn()` 示例**

```php


<?php
$a = strcspn('banana', 'a');
$b = strcspn('banana', 'abcd');
$c = strcspn('banana', 'z');
$d = strcspn('abcdhelloabcd', 'a', -9);
$e = strcspn('abcdhelloabcd', 'a', -9, -5);

var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);
?>

   
```

以上示例会输出：

```text


int(1)
int(0)
int(6)
int(5)
int(4)

   
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strspn()`
