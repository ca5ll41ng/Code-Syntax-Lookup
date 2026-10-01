---
id: "zh-php-function-function-xml-parse"
language: "php"
lang: "zh"
category: "function"
name: "xml_parse"
title: "开始解析 XML 文档"
signature: "int xml_parse(XMLParser $parser, string $data, bool $is_final = false)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开始解析 XML 文档

## 说明

```php
int xml_parse(XMLParser $parser, string $data, bool $is_final = false)
```

`xml_parse()` 解析 XML 文档。已配置事件的处理程序根据需要被无限次调用。

## 参数

- **`$parser`** — 指向将要使用的 XML 解析器的指针。
- **`$data`** — 要解析的数据块。可以通过使用新数据多次调用 `xml_parse()` 来分段解析文档，只要在解析最后一个数据时设置 `$is_final` 参数且为 `true` 即可。
- **`$is_final`** — 如果被设置为 `true`，则 `$data` 为当前解析中最后一段数据。

## 返回值

成功时返回 1，失败时返回 0。

若解析失败，可以使用如下函数获取错误信息：`xml_get_error_code()`、`xml_error_string()`、`xml_get_current_line_number()`、`xml_get_current_column_number()` 和 `xml_get_current_byte_index()`。

> 将 `$is_final` 参数设置为 `true`，一些错误（例如 entity 错误）将会在数据末尾报告。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 示例

**分块解析大型 XML 文档**

此示例展示了如何以块的形式读取和解析大型 XML 文档，这样就不必将整个文档保存在内存中。为简洁起见，省略了错误处理。

```php


<?php
$stream = fopen('examples/book-simple.xml', 'r');
$parser = xml_parser_create();

xml_set_element_handler(
    $parser,
    function($parser, $name, $attributes) { echo $name, PHP_EOL; },
    function($parser, $name) { echo $name, PHP_EOL; }
);

while (($data = fread($stream, 16384))) {
    xml_parse($parser, $data); // parse the current chunk
}
xml_parse($parser, '', true); // finalize parsing
fclose($stream);

   
```
