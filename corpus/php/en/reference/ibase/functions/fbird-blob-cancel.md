---
id: "en-php-function-function-fbird-blob-cancel"
language: "php"
lang: "en"
category: "function"
name: "fbird_blob_cancel"
title: "Cancel creating blob"
signature: "bool fbird_blob_cancel(resource $blob_handle)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.fbird-blob-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancel creating blob

## Description

```php
bool fbird_blob_cancel(resource $blob_handle)
```

This function will discard a BLOB if it has not yet been closed by `fbird_blob_close()`.

## Parameters

- **`$blob_handle`** — A BLOB handle opened with `fbird_blob_create()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fbird_blob_close()` `fbird_blob_create()` `fbird_blob_import()`
