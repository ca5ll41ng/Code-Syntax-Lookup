---
id: "en-php-function-function-yaz-present"
language: "php"
lang: "en"
category: "function"
name: "yaz_present"
title: "Prepares for retrieval (Z39.50 present)"
signature: "bool yaz_present(resource $id)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-present.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares for retrieval (Z39.50 present)

## Description

```php
bool yaz_present(resource $id)
```

This function prepares for retrieval of records after a successful search.

The `yaz_range()` function should be called prior to this function to specify the range of records to be retrieved.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.

## Return Values

Returns `true` on success or `false` on failure.
