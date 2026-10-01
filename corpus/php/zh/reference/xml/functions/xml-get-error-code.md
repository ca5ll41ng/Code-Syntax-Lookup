---
id: "zh-php-function-function-xml-get-error-code"
language: "php"
lang: "zh"
category: "function"
name: "xml_get_error_code"
title: "获取 XML 解析器错误代码"
signature: "int xml_get_error_code(XMLParser $parser)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-get-error-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 XML 解析器错误代码

## 说明

```php
int xml_get_error_code(XMLParser $parser)
```

获取 XML 解析器错误代码。

## 参数

- **`$parser`** — 一个指向要返回错误代码的 XML 解析器的指针

## 返回值

返回错误代码部分列出中的某个错误代码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 参见

`xml_error_string()`
