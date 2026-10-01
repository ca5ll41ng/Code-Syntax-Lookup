---
id: "zh-php-function-function-xml-parser-create-ns"
language: "php"
lang: "zh"
category: "function"
name: "xml_parser_create_ns"
title: "创建支持命名空间的 XML 解析器"
signature: "XMLParser xml_parser_create_ns(string|null $encoding = null, string $separator = \":\")"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parser-create-ns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建支持命名空间的 XML 解析器

## 说明

```php
XMLParser xml_parser_create_ns(string|null $encoding = null, string $separator = ":")
```

`xml_parser_create_ns()` 新建支持 XML 命名空间的解析器并返回可被其它 XML 函数使用的 `XMLParser` 实例。

## 参数

- **`$encoding`** — 自动检测输入编码，因此 `$encoding` 参数仅指定输出编码。默认输出字符集是 UTF-8。支持的编码有 `ISO-8859-1`、`UTF-8` 和 `US-ASCII`。
- **`$separator`** — 使用名称空间感知的解析器标记参数传递给各种处理函数将由名称空间和标记名称组成，这些名称由 `$separator` 中指定的字符串分隔。

## 返回值

返回新 `XMLParser` 实例。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现在返回 `XMLParser` 实例；之前返回 `resource`， 或者在失败时返回 `false`。 |
| 8.0.0 | `$encoding` 现在可以为 null。 |

## 参见

`xml_parser_create()`
