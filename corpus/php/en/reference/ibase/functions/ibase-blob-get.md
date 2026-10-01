---
id: "en-php-function-function-ibase-blob-get"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_get"
title: "Get len bytes data from open blob"
signature: "string ibase_blob_get(resource $blob_handle, int $len)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get len bytes data from open blob

## Description

```php
string ibase_blob_get(resource $blob_handle, int $len)
```

This function returns at most `$len` bytes from a BLOB that has been opened for reading by `ibase_blob_open()`.

> It is not possible to read from a BLOB that has been opened for writing by `ibase_blob_create()`.

## Parameters

- **`$blob_handle`** — A BLOB handle opened with `ibase_blob_open()`.
- **`$len`** — Size of returned data.

## Return Values

Returns at most `$len` bytes from the BLOB, or `false` on failure.

## Examples

**`ibase_blob_get()` example**

```php


<?php
$result    = ibase_query("SELECT blob_value FROM table");
$data      = ibase_fetch_object($result);
$blob_data = ibase_blob_info($data->BLOB_VALUE);
$blob_hndl = ibase_blob_open($data->BLOB_VALUE);
echo         ibase_blob_get($blob_hndl, $blob_data[0]);
?>

    
```

Whilst this example doesn't do much more than a 'ibase_blob_echo($data->BLOB_VALUE)' would do, it does show you how to get information into a $variable to manipulate as you please.

## See Also

 `ibase_blob_open()` `ibase_blob_close()` `ibase_blob_echo()`
