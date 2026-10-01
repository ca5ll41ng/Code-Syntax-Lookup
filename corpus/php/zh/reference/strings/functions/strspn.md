---
id: "zh-php-function-function-strspn"
language: "php"
lang: "zh"
category: "function"
name: "strspn"
title: "计算字符串中全部字符都存在于指定字符集合中的第一段子串的长度"
signature: "int strspn(string $string, string $characters, int $offset = 0, int|null $length = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strspn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算字符串中全部字符都存在于指定字符集合中的第一段子串的长度

## 说明

```php
int strspn(string $string, string $characters, int $offset = 0, int|null $length = null)
```

返回 `$string` 中全部字符*仅*存在于 `$characters` 中的第一组连续字符(子字符串)的长度。

如果省略了 `$offset` 和 `$length` 参数，则检查整个 `$string` 字符串；如果指定了这两个参数，则效果等同于调用 `strspn(substr($string, $offset, $length), $characters)`（更多信息，参见 `function.substr` ）。

代码行： ```php <?php $var = strspn("42 is the answer to the 128th question.", "1234567890"); ?> ``` `$var` 将被指派为 2，因为 '42' 是 `$string` 中第一段全部字符都存在于 '1234567890' 的连续字符。

## 参数

- **`$string`** — 待检查的字符串。
- **`$characters`** — 检查字符列表。
- **`$offset`** — `$string` 的开始检查位置。 — 如果 `$offset` 被设置并且是非负的，`strspn()` 将从 `$string` 的第 `$offset` 个位置开始检查。例如，在字符串 '`abcdef`' 中，第 `0` 个位置的字符是 '`a`'，第二个位置的字符是 '`c`'，等等。 — 如果 `$offset` 被设置并且为负数，`strspn()` 将从 `$string` 的尾部倒数第 `$offset` 个位置开始检查 `$string`。
- **`$length`** — `$string` 中检查的长度。 — 如果 `$length` 被设置并且为非负数，那么将从起始位置开始，检查 `$string` 的 `$length` 个长度的字符。 — 如果 `$length` 被设置并且为负数，那么将从起始位置开始，直到从 `$string` 尾部开始第 `$length` 个位置，对 `$string` 进行检查。

## 返回值

返回完全由 `$characters` 中的字符组成的 `$string` 初始段的长度。

> 当设置了 `$offset` 参数时，返回的长度从此为止开始计算，而不是从 `$string` 的开头开始计算。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 现在允许为 null。 |

## 示例

**`strspn()` 示例**

```php


<?php
echo strspn("foo", "o", 1, 2); // 打印: 2
?>

    
```

以上示例会输出：

```text


int(0)
int(2)
int(1)

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strcspn()`
