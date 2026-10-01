---
id: "zh-php-function-function-strripos"
language: "php"
lang: "zh"
category: "function"
name: "strripos"
title: "计算指定字符串在目标字符串中最后一次出现的位置（不区分大小写）"
signature: "int|false strripos(string $haystack, string $needle, int $offset = 0)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strripos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算指定字符串在目标字符串中最后一次出现的位置（不区分大小写）

## 说明

```php
int|false strripos(string $haystack, string $needle, int $offset = 0)
```

以不区分大小写的方式查找指定字符串在目标字符串中最后一次出现的位置。与 `strrpos()` 不同，`strripos()` 不区分大小写。

## 参数

- **`$haystack`** — 在此字符串中进行查找。
- **`$needle`** — 要搜索的字符串。 — Prior to PHP 8.0.0, if `$needle` is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the `$needle` should either be explicitly cast to string, or an explicit call to `chr()` should be performed.
- **`$offset`** — 如果为 0 或正数，则从左到右搜索，跳过 `$haystack` 的开头 `$offset` 个字节。 — 如果为负数，则从右向左执行搜索，跳过 `$haystack` 的最后 `$offset` 个字节并搜索首次出现的 `$needle`。 > 这实际是在最后 `$offset` 个字节之前寻找最后出现的 `$needle`。

## 返回值

返回 `$needle` 相对于 `$haystack` 字符串的位置 （与搜索的方向或 `$offset` 无关）。

> 字符串位置从 0 开始，而不是 1。

如果未找到 needle，则返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$needle` 现在接受空字符串。 |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会进行 ASCII 大小写转换。非 ASCII 字节值将通过它们的字节值进行比较。 |
| 8.0.0 | 不再支持将 `integer` 传递给 `$needle`。 |
| 7.3.0 | 弃用将 `integer` 传递给 `$needle`。 |

## 示例

**`strripos()` 简单示例**

```php


<?php

$haystack = 'ababcd';
$needle   = 'aB';

$pos      = strripos($haystack, $needle);

if ($pos === false) {
    echo "Sorry, we did not find `$needle` in `$haystack`";
} else {
    echo "Congratulations!\n";
    echo "We found the last `$needle` in `$haystack` at position `$pos`";
}

?>

    
```

以上示例会输出：

```text


Congratulations!
We found the last `aB` in `ababcd` at position `2`

    
```

## 参见

`strpos()` `stripos()` `strrchr()` `substr()` `stristr()` `strstr()`
