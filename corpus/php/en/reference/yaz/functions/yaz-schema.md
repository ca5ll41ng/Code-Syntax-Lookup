---
id: "en-php-function-function-yaz-schema"
language: "php"
lang: "en"
category: "function"
name: "yaz_schema"
title: "Specifies schema for retrieval"
signature: "void yaz_schema(resource $id, string $schema)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-schema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies schema for retrieval

## Description

```php
void yaz_schema(resource $id, string $schema)
```

`yaz_schema()` specifies the schema for retrieval.

This function should be called before `yaz_search()` or `yaz_present()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$schema`** — Must be specified as an OID (Object Identifier) in a raw dot-notation (like `1.2.840.10003.13.4`) or as one of the known registered schemas: `GILS-schema`, `Holdings`, `Zthes`, ...

## Return Values

No value is returned.
