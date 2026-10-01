---
id: "en-php-function-function-ibase-blob-cancel"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_cancel"
title: "Cancel creating blob"
signature: "bool ibase_blob_cancel(resource $blob_handle)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancel creating blob

## Description

```php
bool ibase_blob_cancel(resource $blob_handle)
```

This function will discard a BLOB if it has not yet been closed by `ibase_blob_close()`.

## Parameters

- **`$blob_handle`** — A BLOB handle opened with `ibase_blob_create()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_blob_close()` `ibase_blob_create()` `ibase_blob_import()`
