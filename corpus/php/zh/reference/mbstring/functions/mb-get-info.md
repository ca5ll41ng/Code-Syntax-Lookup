---
id: "zh-php-function-function-mb-get-info"
language: "php"
lang: "zh"
category: "function"
name: "mb_get_info"
title: "获取 mbstring 的内部设置"
signature: "array|string|int|false|null mb_get_info(string $type = \"all\")"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-get-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 mbstring 的内部设置

## 说明

```php
array|string|int|false|null mb_get_info(string $type = "all")
```

`mb_get_info()` 返回 mbstring 参数的内部设定。

## 参数

- **`$type`** — 如果没有设定 `$type` 或者将其设定为 `"all"` 将会返回以下内容 `"internal_encoding"`, `"http_input"`, `"http_output"`, `"http_output_conv_mimetypes"`, `"mail_charset"`, `"mail_header_encoding"`, `"mail_body_encoding"`, `"illegal_chars"`, `"encoding_translation"`, `"language"`, `"detect_order"`, `"substitute_character"` 和 `"strict_detection"`。 — 如果 `$type` 设定为类似 `"internal_encoding"`, `"http_input"`, `"http_output"`, `"http_output_conv_mimetypes"`, `"mail_charset"`, `"mail_header_encoding"`, `"mail_body_encoding"`, `"illegal_chars"`, `"encoding_translation"`, `"language"`, `"detect_order"`, `"substitute_character"` 或 `"strict_detection"`，将返回该参数的设置。

## 返回值

如果没有指定 `$type` 将返回类型信息的数组，否则将返回指定 `$type` 的信息。 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 参数 `$type` 中的 `"func_overload"` 和 `"func_overload_list"` 不再被支持。 |

## 参见

`mb_regex_encoding()` `mb_http_output()`
