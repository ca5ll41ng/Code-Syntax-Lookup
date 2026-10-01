---
id: "zh-php-function-function-xml-parser-set-option"
language: "php"
lang: "zh"
category: "function"
name: "xml_parser_set_option"
title: "在 XML 解析器中设置选项"
signature: "bool xml_parser_set_option(XMLParser $parser, int $option, string|int|bool $value)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parser-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 XML 解析器中设置选项

## 说明

```php
bool xml_parser_set_option(XMLParser $parser, int $option, string|int|bool $value)
```

在 XML 解析器中设置选项。

## 参数

- **`$parser`** — 指向要设置选项的 XML 解析器。
- **`$option`** — 要设置的选项。见下文。 — 以下选项可用： | 选项常量 | 数据类型 | 说明 | | --- | --- | --- | | `XML_OPTION_CASE_FOLDING` | bool | 控制是否为此 XML 解析器启用大写转换。默认启用。 | | `XML_OPTION_PARSE_HUGE` | bool | 允许解析大于 10 MB 的文档。 仅当文档大小有限时才应启用此选项，否则可能导致 DoS。 仅在使用 libxml2 时才可用。 | | `XML_OPTION_SKIP_TAGSTART` | integer | 指定在标记名称的开头应略过多少个字符。 | | `XML_OPTION_SKIP_WHITE` | bool | 是否略过由空白字符组成的值。 | | `XML_OPTION_TARGET_ENCODING` | string | 设置要在此 XML 解析器中使用的目标编码。默认情况下，设置的编码与 `xml_parser_create()` 使用的源编码相同。支持的目标编码有 `ISO-8859-1`、`US-ASCII` 和 `UTF-8`。 |
- **`$value`** — 选项的新值。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 错误／异常

当传递到 `$option` 的值无效时抛出 `ValueError`。

在 PHP 8.0.0 之前，向 `$option` 传递的值无效时会生成 `E_WARNING` 并使函数返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 添加了选项 `XML_OPTION_PARSE_HUGE`。 |
| 8.3.0 | `$value` 参数现在也接受 bool。选项 `XML_OPTION_CASE_FOLDING` 和 `XML_OPTION_SKIP_WHITE` 现在是 bool 选项。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
| 8.0.0 | 如果 `$option` 无效，现在抛出 `ValueError`。 |
