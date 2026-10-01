---
id: "zh-php-function-function-mb-strrpos"
language: "php"
lang: "zh"
category: "function"
name: "mb_strrpos"
title: "查找字符串在一个字符串中最后出现的位置"
signature: "int|false mb_strrpos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strrpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串在一个字符串中最后出现的位置

## 说明

```php
int|false mb_strrpos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)
```

基于字符数执行一个多字节安全的 `strrpos()` 操作。 `$needle` 的位置是从 `$haystack` 的开始进行统计的。 第一个字符的位置是 0，第二个字符的位置是 1。

## 参数

- **`$haystack`** — 查找 `$needle` 在这个 `string` 中最后出现的位置。
- **`$needle`** — 在 `$haystack` 中查找这个 `string`。
- **`$offset`** — 可以指定从 `$haystack` 的任意字符位置开始搜索。负值将在 `$haystack` 结尾前的某个点停止搜索。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回 `string` 的 `$haystack` 中，`$needle` 最后出现位置的数值。 如果没有找到 `$needle`，它将返回 `false`。

## 错误／异常

- If `$offset` is greater than the length of `$haystack`, a `ValueError` will be thrown.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 已经删除将 `$encoding` 作为第三个参数而不是 `$offset` 传递。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 参见

`mb_strpos()` `mb_internal_encoding()` `strrpos()`
