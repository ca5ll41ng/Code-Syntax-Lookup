---
id: "zh-php-function-function-mb-strrchr"
language: "php"
lang: "zh"
category: "function"
name: "mb_strrchr"
title: "查找指定字符在另一个字符串中最后一次的出现"
signature: "string|false mb_strrchr(string $haystack, string $needle, bool $before_needle = false, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strrchr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找指定字符在另一个字符串中最后一次的出现

## 说明

```php
string|false mb_strrchr(string $haystack, string $needle, bool $before_needle = false, string|null $encoding = null)
```

`mb_strrchr()` 查找了 `$needle` 在 `$haystack` 中最后一次出现的位置，并返回 `$haystack` 的部分。 如果没有找到 `$needle`，它将返回 `false`。

## 参数

- **`$haystack`** — 在该字符串中查找 `$needle` 最后出现的位置。
- **`$needle`** — 在 `$haystack` 中查找这个字符串。
- **`$before_needle`** — 决定这个函数返回 `$haystack` 的哪一部分。 如果设置为 `true`，它将返回的字符是从 `$haystack` 的开始到 `$needle` 最后出现的位置。 如果设置为 `false`，它将返回的字符是从 `$needle` 最后出现的位置到 `$haystack` 的末尾。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回 `$haystack` 的一部分，或者在没有找到 `$needle` 时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 参见

`strrchr()` `mb_strstr()` `mb_strrichr()`
