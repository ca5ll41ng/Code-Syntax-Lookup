---
id: "zh-php-function-function-xml-get-current-line-number"
language: "php"
lang: "zh"
category: "function"
name: "xml_get_current_line_number"
title: "获取 XML 解析器的当前行号"
signature: "int xml_get_current_line_number(XMLParser $parser)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-get-current-line-number.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 XML 解析器的当前行号

## 说明

```php
int xml_get_current_line_number(XMLParser $parser)
```

获取指定 XML 解析器当前的行号。

## 参数

- **`$parser`** — 一个指向要获取当前行号的 XML 解析器的指针。

## 返回值

返回解析器当前在其数据缓冲区的行号。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 参见

`xml_get_current_column_number()` `xml_get_current_byte_index()`
