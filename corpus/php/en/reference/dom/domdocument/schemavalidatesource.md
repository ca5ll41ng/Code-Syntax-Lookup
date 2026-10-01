---
id: "en-php-function-domdocument-schemavalidatesource"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::schemaValidateSource"
title: "Validates a document based on a schema"
signature: "public bool DOMDocument::schemaValidateSource(string $source, int $flags = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.schemavalidatesource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validates a document based on a schema

## Description

```php
public bool DOMDocument::schemaValidateSource(string $source, int $flags = 0)
```

Validates a document based on a schema defined in the given string.

## Parameters

- **`$source`** — A string containing the schema.
- **`$flags`** — A bitmask of Libxml schema validation flags. Currently the only supported value is LIBXML_SCHEMA_CREATE. Available since Libxml 2.6.14.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMDocument::schemaValidate()` `DOMDocument::relaxNGValidate()` `DOMDocument::relaxNGValidateSource()` `DOMDocument::validate()`
