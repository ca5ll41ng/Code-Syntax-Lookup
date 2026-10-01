---
id: "zh-php-guide-xml-constants"
language: "php"
lang: "zh"
category: "guide"
name: "xml.constants"
title: "预定义常量"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`XML_ERROR_NONE` (`int`)**
- **`XML_ERROR_NO_MEMORY` (`int`)**
- **`XML_ERROR_SYNTAX` (`int`)**
- **`XML_ERROR_NO_ELEMENTS` (`int`)**
- **`XML_ERROR_INVALID_TOKEN` (`int`)**
- **`XML_ERROR_UNCLOSED_TOKEN` (`int`)**
- **`XML_ERROR_PARTIAL_CHAR` (`int`)**
- **`XML_ERROR_TAG_MISMATCH` (`int`)**
- **`XML_ERROR_DUPLICATE_ATTRIBUTE` (`int`)**
- **`XML_ERROR_JUNK_AFTER_DOC_ELEMENT` (`int`)**
- **`XML_ERROR_PARAM_ENTITY_REF` (`int`)**
- **`XML_ERROR_UNDEFINED_ENTITY` (`int`)**
- **`XML_ERROR_RECURSIVE_ENTITY_REF` (`int`)**
- **`XML_ERROR_ASYNC_ENTITY` (`int`)**
- **`XML_ERROR_BAD_CHAR_REF` (`int`)**
- **`XML_ERROR_BINARY_ENTITY_REF` (`int`)**
- **`XML_ERROR_ATTRIBUTE_EXTERNAL_ENTITY_REF` (`int`)**
- **`XML_ERROR_MISPLACED_XML_PI` (`int`)**
- **`XML_ERROR_UNKNOWN_ENCODING` (`int`)**
- **`XML_ERROR_INCORRECT_ENCODING` (`int`)**
- **`XML_ERROR_UNCLOSED_CDATA_SECTION` (`int`)**
- **`XML_ERROR_EXTERNAL_ENTITY_HANDLING` (`int`)**
- **`XML_OPTION_CASE_FOLDING` (`int`)**
- **`XML_OPTION_PARSE_HUGE` (`int`)** — 自 PHP 8.4.0 起可用。 当使用 libxml2 < 2.7.0 时（例如在 PHP 7.x 上），此选项默认启用且无法禁用。
- **`XML_OPTION_TARGET_ENCODING` (`int`)**
- **`XML_OPTION_SKIP_TAGSTART` (`int`)**
- **`XML_OPTION_SKIP_WHITE` (`int`)**
- **`XML_SAX_IMPL` (`string`)** — 指定 SAX 实现方法。可为 `libxml` 或 `expat`。
