---
id: "zh-php-function-function-iconv-substr"
language: "php"
lang: "zh"
category: "function"
name: "iconv_substr"
title: "截取字符串的部分"
signature: "string|false iconv_substr(string $string, int $offset, int|null $length = null, string|null $encoding = null)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv-substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 截取字符串的部分

## 说明

```php
string|false iconv_substr(string $string, int $offset, int|null $length = null, string|null $encoding = null)
```

根据 `$offset` 和 `$length` 参数指定 `$string` 截取的部分。

## 参数

- **`$string`** — 原始字符串。
- **`$offset`** — 如果 `$offset` 是非负数，`iconv_substr()` 从 `$string` 开头第 `$offset` 个字符开始截出部分，从 0 开始计数。 — 如果 `$offset` 是负数，`iconv_substr()` 从 `$string` 末尾向前 `$offset` 个字符开始截取。
- **`$length`** — 如果指定了 `$length` 并且是正数，返回的值从 `$offset` 截取部分，最多包含 `$length` 个字符（取决于 `$string` 的长度）。 — 如果传入了负数的 `$length`， `iconv_substr()` 将从第 `$offset` 个字符到离末尾 `$length` 个字符截出 `$string` 的部分。 如果 `$offset` 也是负数，则开始位置计算规则的解释见以上。
- **`$encoding`** — 如果省略了参数 `$encoding`，`$string` 的编码被认定为 iconv.internal_encoding。 — 注意，`$offset` 和 `$length` 参数总是被认为字符表现的偏移，基于 `$encoding` 检测到的字符集进行统计计算，而相对应的 `substr()` 则是基于字节的位移来计算。

## 返回值

返回 `$offset` 和 `$length` 参数指定的 `$string` 的部分。

如果 `$string` 比 `$offset` 字符数更短，将会返回 `false`。 如果 `$string` 是 `$offset` 个字符的长度，将返回空字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 和 `$encoding` 现在可为 null。 |
| 7.0.11 | 如果 `$string` 等于 `$offset` 个字符，将返回空字符串。之前的版本里，这种情况会返回 `false`。 |

## 参见

`substr()` `mb_substr()` `mb_strcut()`
