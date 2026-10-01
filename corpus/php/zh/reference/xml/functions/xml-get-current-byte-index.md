---
id: "zh-php-function-function-xml-get-current-byte-index"
language: "php"
lang: "zh"
category: "function"
name: "xml_get_current_byte_index"
title: "获取 XML 解析器的当前字节索引"
signature: "int xml_get_current_byte_index(XMLParser $parser)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-get-current-byte-index.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 XML 解析器的当前字节索引

## 说明

```php
int xml_get_current_byte_index(XMLParser $parser)
```

获取指定 XML 解析器的当前字节索引（current byte index）。

## 参数

- **`$parser`** — 指向要取得字节索引的 XML 解析器的引用。

## 返回值

返回解析器当前在其数据缓冲区中的字节索引（起始值为 0）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 注释

> 该函数将返回根据 UTF-8 编码的文本的字节索引，而不论输入是否是其他的编码。

## 参见

`xml_get_current_column_number()` `xml_get_current_line_number()`
