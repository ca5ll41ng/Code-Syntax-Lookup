---
id: "en-php-function-dom-htmldocument-savehtml"
language: "php"
lang: "en"
category: "function"
name: "Dom\\HTMLDocument::saveHtml"
title: "Serializes the document as an HTML string"
signature: "public string Dom\\HTMLDocument::saveHtml(Dom\\Node|null $node = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-htmldocument.savehtml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializes the document as an HTML string

## Description

```php
public string Dom\HTMLDocument::saveHtml(Dom\Node|null $node = null)
```

Serializes the document as an HTML string.

## Parameters

- **`$node`** — The node to serialize. If not provided, the entire document is serialized.

## Return Values

The serialized HTML document string in the current document encoding.

## Errors/Exceptions

- Throws a Dom\DOMException with code `Dom\WRONG_DOCUMENT_ERR` if `$node` is from another document.

## See Also

 `Dom\HTMLDocument::saveHtmlFile()` `Dom\HTMLDocument::saveXml()`
