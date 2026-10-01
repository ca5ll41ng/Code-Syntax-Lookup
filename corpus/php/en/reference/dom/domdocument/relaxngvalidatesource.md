---
id: "en-php-function-domdocument-relaxngvalidatesource"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::relaxNGValidateSource"
title: "Performs relaxNG validation on the document"
signature: "public bool DOMDocument::relaxNGValidateSource(string $source)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.relaxngvalidatesource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs relaxNG validation on the document

## Description

```php
public bool DOMDocument::relaxNGValidateSource(string $source)
```

Performs [relaxNG]() validation on the document based on the given RNG source.

## Parameters

- **`$source`** — A string containing the RNG schema.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMDocument::relaxNGValidate()` `DOMDocument::schemaValidate()` `DOMDocument::schemaValidateSource()` `DOMDocument::validate()`
