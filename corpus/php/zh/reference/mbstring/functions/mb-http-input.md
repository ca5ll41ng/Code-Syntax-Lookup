---
id: "zh-php-function-function-mb-http-input"
language: "php"
lang: "zh"
category: "function"
name: "mb_http_input"
title: "检测 HTTP 输入字符编码"
signature: "array|string|false mb_http_input(string|null $type = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-http-input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测 HTTP 输入字符编码

## 说明

```php
array|string|false mb_http_input(string|null $type = null)
```

检测 HTTP 输入字符的编码。

## 参数

- **`$type`** — 设置的字符串指定了输入类型。 `"G"` 是 GET，`"P"` 是 POST，`"C"` 是 COOKIE，`"S"` 是 string，`"L"` 是 list，以及 `"I"` 是整个列表（将会返回 `array`）。 如果省略了 type，它将返回最后处理的一种输入类型。

## 返回值

每个 `$type` 的字符编码名称，如果 `$type` 是 `"I"` 时为字符编码名称数组。 如果 `mb_http_input()` 没有处理过任何指定的 HTTP 输入，它将返回 `false`。

## 错误／异常

如果 `$type` 无效，抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$type` 无效，`mb_http_input()` 现在抛出 ValueError。 |
| 8.0.0 | `$type` 现在可为 null。 |

## 参见

`mb_internal_encoding()` `mb_http_output()` `mb_detect_order()`
