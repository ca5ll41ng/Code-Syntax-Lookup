---
id: "en-php-function-function-yaz-syntax"
language: "php"
lang: "en"
category: "function"
name: "yaz_syntax"
title: "Specifies the preferred record syntax for retrieval"
signature: "void yaz_syntax(resource $id, string $syntax)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-syntax.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the preferred record syntax for retrieval

## Description

```php
void yaz_syntax(resource $id, string $syntax)
```

`yaz_syntax()` specifies the preferred record syntax for retrieval

This function should be called before `yaz_search()` or `yaz_present()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$syntax`** — The syntax must be specified as an OID (Object Identifier) in a raw dot-notation (like `1.2.840.10003.5.10`) or as one of the known registered record syntaxes (sutrs, usmarc, grs1, xml, etc.).

## Return Values

No value is returned.
