---
id: "zh-php-function-function-mb-strimwidth"
language: "php"
lang: "zh"
category: "function"
name: "mb_strimwidth"
title: "获取按指定宽度截断的字符串"
signature: "string mb_strimwidth(string $string, int $start, int $width, string $trim_marker = \"\", string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strimwidth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取按指定宽度截断的字符串

## 说明

```php
string mb_strimwidth(string $string, int $start, int $width, string $trim_marker = "", string|null $encoding = null)
```

将 `string` `$string` 截断到指定 `$width`。其中半角字符计为 `1`，全角字符计为 `2`。有关东亚字符宽度的详细信息，请参阅 [11/](11/)。

## 参数

- **`$string`** — 要截断的 `string`。
- **`$start`** — 开始位置的偏移。从这些字符数开始的截取字符串。（默认是 0 个字符） 如果 start 是负数，就是字符串结尾处的字符数。
- **`$width`** — 所需修剪的宽度。如果指定负宽度，则从字符串末尾开始计数。 > 从 PHP 8.3.0 起，传递负宽度已被弃用。
- **`$trim_marker`** — 当字符串被截断的时候，将此字符串添加到截断后的末尾。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

截断后的 `string`。如果设置了 `$trim_marker`，还将结尾处的字符替换为 `$trim_marker` ，并符合 `$width` 的宽度。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 将负的 `$width` 传递给 `mb_strimwidth()` 现已废弃。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 7.1.0 | 支持负数的 `$start` 和 `$width`。 |

## 示例

**`mb_strimwidth()` 示例**

```php


<?php
echo mb_strimwidth("Hello World", 0, 10, "...");
// 输出 Hello W...
?>

    
```

## 参见

`mb_strwidth()` `mb_internal_encoding()`
