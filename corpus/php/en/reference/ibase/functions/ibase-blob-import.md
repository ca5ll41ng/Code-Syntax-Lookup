---
id: "en-php-function-function-ibase-blob-import"
language: "php"
lang: "en"
category: "function"
name: "ibase_blob_import"
title: "Create blob, copy file in it, and close it"
signature: "string ibase_blob_import(resource $link_identifier, resource $file_handle)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-blob-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create blob, copy file in it, and close it

## Description

```php
string ibase_blob_import(resource $link_identifier, resource $file_handle)
```

```php
string ibase_blob_import(resource $file_handle)
```

This function creates a BLOB, reads an entire file into it, closes it and returns the assigned BLOB id.

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.
- **`$file_handle`** — The file handle is a handle returned by `fopen()`.

## Return Values

Returns the BLOB id on success, or `false` on error.

## Examples

**`ibase_blob_import()` example**

```php


<?php
$dbh = ibase_connect($host, $username, $password);
$filename = '/tmp/bar';

$fd = fopen($filename, 'r');
if ($fd) {

    $blob = ibase_blob_import($dbh, $fd);
    fclose($fd);

    if (!is_string($blob)) {
        // import failed
    } else {
        $query = "INSERT INTO foo (name, data) VALUES ('$filename', ?)";
        $prepared = ibase_prepare($dbh, $query);
        if (!ibase_execute($prepared, $blob)) {
            // record insertion failed
        }
    }
} else {
    // unable to open the data file
}
?>

   
```

## See Also

 `ibase_blob_add()` `ibase_blob_cancel()` `ibase_blob_close()` `ibase_blob_create()`
