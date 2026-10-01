---
id: "en-php-function-domdocument-schemavalidate"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::schemaValidate"
title: "Validates a document based on a schema. Only XML Schema 1.0 is supported."
signature: "public bool DOMDocument::schemaValidate(string $filename, int $flags = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.schemavalidate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validates a document based on a schema. Only XML Schema 1.0 is supported.

## Description

```php
public bool DOMDocument::schemaValidate(string $filename, int $flags = 0)
```

Validates a document based on the given schema file.

## Parameters

- **`$filename`** — The path to the schema.
- **`$flags`** — A bitmask of Libxml schema validation flags. Currently the only supported value is LIBXML_SCHEMA_CREATE. Available since Libxml 2.6.14.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMDocument::schemaValidateSource()` `DOMDocument::relaxNGValidate()` `DOMDocument::relaxNGValidateSource()` `DOMDocument::validate()`
