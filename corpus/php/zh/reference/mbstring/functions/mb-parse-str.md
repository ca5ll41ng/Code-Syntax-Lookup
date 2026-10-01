---
id: "zh-php-function-function-mb-parse-str"
language: "php"
lang: "zh"
category: "function"
name: "mb_parse_str"
title: "解析 GET/POST/COOKIE 数据并设置全局变量"
signature: "bool mb_parse_str(string $string, array $result)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-parse-str.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 GET/POST/COOKIE 数据并设置全局变量

## 说明

```php
bool mb_parse_str(string $string, array $result)
```

解析 GET/POST/COOKIE 数据并设置全局变量。 由于 PHP 不提供原始 POST/COOKIE 数据，目前它仅能够用于 GET 数据。 它解析了 URL 编码过的数据，检测其编码，并转换编码为内部编码，然后设置其值为 `array` 的 `$result` 或者全局变量。

## 参数

- **`$string`** — URL 编码过的数据。
- **`$result`** — 一个 `array`，包含解码过的、编码转换后的值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 第二个参数不再可选。 |
| 7.2.0 | 弃用在没有第二个参数的时候调用 `mb_parse_str()`。 |

## 参见

`mb_detect_order()` `mb_internal_encoding()`
