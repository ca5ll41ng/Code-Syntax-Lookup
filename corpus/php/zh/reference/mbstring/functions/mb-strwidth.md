---
id: "zh-php-function-function-mb-strwidth"
language: "php"
lang: "zh"
category: "function"
name: "mb_strwidth"
title: "返回字符串的宽度"
signature: "int mb_strwidth(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strwidth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符串的宽度

## 说明

```php
int mb_strwidth(string $string, string|null $encoding = null)
```

返回 `string` 类型 `$string` 的宽度，其中半角字符计为 `1`，全角字符计为 `2`。有关东亚字符宽度的详细信息，请参见 [11/](11/)。

全角字符是： `U+1100`-`U+115F`, `U+11A3`-`U+11A7`, `U+11FA`-`U+11FF`, `U+2329`-`U+232A`, `U+2E80`-`U+2E99`, `U+2E9B`-`U+2EF3`, `U+2F00`-`U+2FD5`, `U+2FF0`-`U+2FFB`, `U+3000`-`U+303E`, `U+3041`-`U+3096`, `U+3099`-`U+30FF`, `U+3105`-`U+312D`, `U+3131`-`U+318E`, `U+3190`-`U+31BA`, `U+31C0`-`U+31E3`, `U+31F0`-`U+321E`, `U+3220`-`U+3247`, `U+3250`-`U+32FE`, `U+3300`-`U+4DBF`, `U+4E00`-`U+A48C`, `U+A490`-`U+A4C6`, `U+A960`-`U+A97C`, `U+AC00`-`U+D7A3`, `U+D7B0`-`U+D7C6`, `U+D7CB`-`U+D7FB`, `U+F900`-`U+FAFF`, `U+FE10`-`U+FE19`, `U+FE30`-`U+FE52`, `U+FE54`-`U+FE66`, `U+FE68`-`U+FE6B`, `U+FF01`-`U+FF60`, `U+FFE0`-`U+FFE6`, `U+1B000`-`U+1B001`, `U+1F200`-`U+1F202`, `U+1F210`-`U+1F23A`, `U+1F240`-`U+1F248`, `U+1F250`-`U+1F251`, `U+20000`-`U+2FFFD`, `U+30000`-`U+3FFFD`。 其它所有字符都是半角字符。

## 参数

- **`$string`** — 待解码的 `string`。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

`string` `$string` 的宽度。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**`mb_strwidth()` 示例**

```php


<?php
var_dump(
    mb_strwidth('a'),       // 拉丁文小写字母 A
    mb_strwidth("\u{ff41}") // 全角拉丁文小写字母 A
);
?>

   
```

以上示例会输出：

```text


int(1)
int(2)

   
```

## 参见

`mb_strimwidth()` `mb_internal_encoding()`
