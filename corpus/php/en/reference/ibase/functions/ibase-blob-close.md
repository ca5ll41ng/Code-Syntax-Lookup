---
id: "en-php-function-function-ibase-blob-close"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_close"
title: "Close blob"
signature: "mixed ibase_blob_close(resource $blob_handle)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close blob

## Description

```php
mixed ibase_blob_close(resource $blob_handle)
```

This function closes a BLOB that has either been opened for reading by `ibase_blob_open()` or has been opened for writing by `ibase_blob_create()`.

## Parameters

- **`$blob_handle`** — A BLOB handle opened with `ibase_blob_create()` or `ibase_blob_open()`.

## Return Values

If the BLOB was being read, this function returns `true` on success, if the BLOB was being written to, this function returns a string containing the BLOB id that has been assigned to it by the database. On failure, this function returns `false`.

## See Also

 `ibase_blob_cancel()` `ibase_blob_open()`
