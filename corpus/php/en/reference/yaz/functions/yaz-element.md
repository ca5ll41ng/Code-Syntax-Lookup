---
id: "en-php-function-function-yaz-element"
language: "php"
lang: "en"
category: "function"
name: "yaz_element"
title: "Specifies Element-Set Name for retrieval"
signature: "bool yaz_element(resource $id, string $elementset)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-element.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies Element-Set Name for retrieval

## Description

```php
bool yaz_element(resource $id, string $elementset)
```

This function sets the element set name for retrieval.

Call this function before `yaz_search()` or `yaz_present()` to specify the element set name for records to be retrieved.

> If this function appears to have no effect, see the description of the `piggybacking` option in `yaz_connect()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$elementset`** — Most servers support `F` (for full records) and `B` (for brief records).

## Return Values

Returns `true` on success or `false` on failure.
