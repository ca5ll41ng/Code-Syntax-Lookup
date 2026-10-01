---
id: "en-php-function-domdocument-relaxngvalidate"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::relaxNGValidate"
title: "Performs relaxNG validation on the document"
signature: "public bool DOMDocument::relaxNGValidate(string $filename)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.relaxngvalidate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs relaxNG validation on the document

## Description

```php
public bool DOMDocument::relaxNGValidate(string $filename)
```

Performs [relaxNG]() validation on the document based on the given RNG schema.

## Parameters

- **`$filename`** — The RNG file.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMDocument::relaxNGValidateSource()` `DOMDocument::schemaValidate()` `DOMDocument::schemaValidateSource()` `DOMDocument::validate()`
