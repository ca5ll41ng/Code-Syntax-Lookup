---
id: "en-php-function-function-ibase-blob-add"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_add"
title: "Add data into a newly created blob"
signature: "void ibase_blob_add(resource $blob_handle, string $data)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add data into a newly created blob

## Description

```php
void ibase_blob_add(resource $blob_handle, string $data)
```

`ibase_blob_add()` adds data into a blob created with `ibase_blob_create()`.

## Parameters

- **`$blob_handle`** — A blob handle opened with `ibase_blob_create()`.
- **`$data`** — The data to be added.

## Return Values

No value is returned.

## See Also

 `ibase_blob_cancel()` `ibase_blob_close()` `ibase_blob_create()` `ibase_blob_import()`
