---
id: "zh-php-function-function-xml-parser-free"
language: "php"
lang: "zh"
category: "function"
name: "xml_parser_free"
title: "释放 XML 解析器"
signature: "#[\\Deprecated] bool xml_parser_free(XMLParser $parser)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parser-free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放 XML 解析器

## 说明

```php
#[\Deprecated] bool xml_parser_free(XMLParser $parser)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

释放指定 XML `$parser`。

> 除了在解析完成时调用 `xml_parser_free()` 之外，在 PHP 8.0.0 之前，如果 parser 资源引用自对象，且对象引用 parser 资源，还必须明确取消对 `$parser` 的引用以避免内存泄漏。

## 参数

- **`$parser`** — 指向要释放的 XML 解析器的指针。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 此函数已弃用。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
