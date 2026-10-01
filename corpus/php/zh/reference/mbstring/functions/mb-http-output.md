---
id: "zh-php-function-function-mb-http-output"
language: "php"
lang: "zh"
category: "function"
name: "mb_http_output"
title: "设置/获取 HTTP 输出字符编码"
signature: "string|bool mb_http_output(string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-http-output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取 HTTP 输出字符编码

## 说明

```php
string|bool mb_http_output(string|null $encoding = null)
```

设置/获取 HTTP 输出字符编码。此函数被调用之后输出的内容会被转换成 `$encoding`。

## 参数

- **`$encoding`** — 如果设置了 `$encoding`，`mb_http_output()` 设置 HTTP 输出字符编码为 `$encoding`。 — 如果省略了 `$encoding`，`mb_http_output()` 返回当前的 HTTP 输出字符编码。

## 返回值

如果省略了 `$encoding`，`mb_http_output()` 返回当前的 HTTP 输出字符编码。 否则成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果 `$encoding` 包含空字节，抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$encoding` 包含空字节， `mb_http_output()` 现在抛出 ValueError。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 参见

`mb_internal_encoding()` `mb_http_input()` `mb_detect_order()`
