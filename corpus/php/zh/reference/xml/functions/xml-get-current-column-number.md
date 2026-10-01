---
id: "zh-php-function-function-xml-get-current-column-number"
language: "php"
lang: "zh"
category: "function"
name: "xml_get_current_column_number"
title: "获取 XML 解析器的当前列号"
signature: "int xml_get_current_column_number(XMLParser $parser)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-get-current-column-number.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 XML 解析器的当前列号

## 说明

```php
int xml_get_current_column_number(XMLParser $parser)
```

获得指定 XML 解析器当前的列号。

## 参数

- **`$parser`** — 一个指向要获取列号的 XML 解析器的指针。

## 返回值

返回指定解析器所在行（由函数 `xml_get_current_line_number()` 给出）的列号。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 参见

`xml_get_current_byte_index()` `xml_get_current_line_number()`
