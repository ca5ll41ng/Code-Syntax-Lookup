---
id: "zh-php-function-function-xml-parser-get-option"
language: "php"
lang: "zh"
category: "function"
name: "xml_parser_get_option"
title: "从 XML 解析器获取选项"
signature: "string|int|bool xml_parser_get_option(XMLParser $parser, int $option)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parser-get-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 XML 解析器获取选项

## 说明

```php
string|int|bool xml_parser_get_option(XMLParser $parser, int $option)
```

从 XML 解析器获取选项值。

## 参数

- **`$parser`** — 指向要获取选项的 XML 解析器。
- **`$option`** — 要获取的选项。可以用 `XML_OPTION_CASE_FOLDING`、 `XML_OPTION_PARSE_HUGE`、 `XML_OPTION_SKIP_TAGSTART`、`XML_OPTION_SKIP_WHITE` 和 `XML_OPTION_TARGET_ENCODING`。 参阅 `xml_parser_set_option()` 获取相应描述。

## 返回值

返回选项的值。

## 错误／异常

当传递到 `$option` 的值无效时抛出 `ValueError`。

在 PHP 8.0.0 之前，向 `$option` 传递的值无效时会生成 `E_WARNING` 并使函数返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 此函数为 bool 选项返回 bool 值。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
| 8.0.0 | 如果 `$option` 无效，现在抛出 `ValueError`。 |
| 7.1.24, 7.2.12, 7.3.0 | `$options` 现在支持 `XML_OPTION_SKIP_TAGSTART` 和 `XML_OPTION_SKIP_WHITE`。 |
