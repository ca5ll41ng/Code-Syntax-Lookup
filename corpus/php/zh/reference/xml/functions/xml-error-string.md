---
id: "zh-php-function-function-xml-error-string"
language: "php"
lang: "zh"
category: "function"
name: "xml_error_string"
title: "获取 XML 解析器的错误字符串"
signature: "string|null xml_error_string(int $error_code)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-error-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 XML 解析器的错误字符串

## 说明

```php
string|null xml_error_string(int $error_code)
```

获取与指定 `$error_code` 关联的 XML 解析器错误字符串。

## 参数

- **`$error_code`** — 由 `xml_get_error_code()` 返回的错误代码。

## 返回值

返回带有错误 `$error_code` 文本描述的字符串，若没有与之对应的描述，返回 `"Unknown"`，否则返回 `null`。

## 参见

`xml_get_error_code()`
