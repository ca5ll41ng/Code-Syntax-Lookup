---
id: "en-php-function-dom-htmldocument-savexml"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::saveXml"
title: "Serializes the document as an XML string"
signature: "public string|false Dom\\HTMLDocument::saveXml(Dom\\Node|null $node = null, int $options = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.savexml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializes the document as an XML string

## Description

```php
public string|false Dom\HTMLDocument::saveXml(Dom\Node|null $node = null, int $options = 0)
```

Serializes the document as an XML string.

## Parameters

- **`$node`** — The node to serialize. If not provided, the entire document is serialized.
- **`$options`** — Additional Options. The `LIBXML_NOEMPTYTAG` and `LIBXML_NOXMLDECL` options are supported. Prior to PHP 8.3.0, only the `LIBXML_NOEMPTYTAG` option is supported.

## Return Values

The serialized XML document string in the current document encoding, or `false` on failure.

## Errors/Exceptions

- Throws a Dom\DOMException with code `Dom\WRONG_DOCUMENT_ERR` if `$node` is from another document.

## See Also

 `Dom\HTMLDocument::saveXmlFile()` `Dom\XMLDocument::saveHtml()`
