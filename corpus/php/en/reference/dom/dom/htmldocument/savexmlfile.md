---
id: "en-php-function-dom-htmldocument-savexmlfile"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::saveXmlFile"
title: "Serializes the document as an XML file"
signature: "public int|false Dom\\HTMLDocument::saveXmlFile(string $filename, int $options = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.savexmlfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializes the document as an XML file

## Description

```php
public int|false Dom\HTMLDocument::saveXmlFile(string $filename, int $options = 0)
```

Serializes the document as an XML file.

## Parameters

- **`$filename`** — The path to the file to save to.
- **`$options`** — Additional Options. The `LIBXML_NOEMPTYTAG` and `LIBXML_NOXMLDECL` options are supported. Prior to PHP 8.3.0, only the `LIBXML_NOEMPTYTAG` option is supported.

## Return Values

The number of bytes written on success, or `false` on failure.

## Errors/Exceptions

- Throws a ValueError if `$filename` is an empty string or contains any null bytes.

## See Also

 `Dom\HTMLDocument::saveXml()` `Dom\HTMLDocument::saveHtmlFile()`
