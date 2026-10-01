---
id: "en-php-function-xmlreader-setparserproperty"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::setParserProperty"
title: "Set parser options"
signature: "public bool XMLReader::setParserProperty(int $property, bool $value)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.setparserproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set parser options

## Description

```php
public bool XMLReader::setParserProperty(int $property, bool $value)
```

Set parser options. The options must be set after `XMLReader::open()` or `XMLReader::XML()` are called and before the first `XMLReader::read()` call.

## Parameters

- **`$property`** — One of the parser option constants.
- **`$value`** — If set to `true` the option will be enabled otherwise will be disabled.

## Return Values

Returns `true` on success or `false` on failure.
