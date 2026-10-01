---
id: "zh-php-function-function-xml-parser-create"
language: "php"
lang: "zh"
category: "function"
name: "xml_parser_create"
title: "创建 XML 解析器"
signature: "XMLParser xml_parser_create(string|null $encoding = null)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parser-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 XML 解析器

## 说明

```php
XMLParser xml_parser_create(string|null $encoding = null)
```

`xml_parser_create()` 新建 XML 解析器并返回可被其它 XML 函数使用的 `XMLParser` 实例。

## 参数

- **`$encoding`** — 自动检测输入编码，因此 `$encoding` 参数仅指定输出编码。默认输出字符集是 UTF-8。如果传递的是空字符串，解析器会尝试通过查看头的的 3 或 4 个字节来识别文档的编码方式。支持的编码有 `ISO-8859-1`、`UTF-8` 和 `US-ASCII`。

## 返回值

返回新 `XMLParser` 实例。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现在返回 `XMLParser` 实例；之前返回 `resource`， 或者在失败时返回 `false`。 |
| 8.0.0 | `$encoding` 现在可以为 null。 |

## 参见

`xml_parser_create_ns()`
