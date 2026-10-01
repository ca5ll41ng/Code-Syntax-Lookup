---
id: "en-php-function-function-ibase-blob-create"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_create"
title: "Create a new blob for adding data"
signature: "resource|false ibase_blob_create(resource $link_identifier = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new blob for adding data

## Description

```php
resource|false ibase_blob_create(resource $link_identifier = null)
```

`ibase_blob_create()` creates a new BLOB for filling with data.

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.

## Return Values

Returns a BLOB handle for later use with `ibase_blob_add()` or `false` on failure.

## See Also

 `ibase_blob_add()` `ibase_blob_cancel()` `ibase_blob_close()` `ibase_blob_import()`
