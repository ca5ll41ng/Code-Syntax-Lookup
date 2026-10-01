---
id: "en-php-function-function-fdf-get-attachment"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_attachment"
title: "Extracts uploaded file embedded in the FDF"
signature: "array fdf_get_attachment(resource $fdf_document, string $fieldname, string $savepath)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-attachment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts uploaded file embedded in the FDF

## Description

```php
array fdf_get_attachment(resource $fdf_document, string $fieldname, string $savepath)
```

Extracts a file uploaded by means of the "file selection" field `$fieldname` and stores it under `$savepath`.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`**
- **`$savepath`** — May be the name of a plain file or an existing directory in which the file is to be created under its original name. Any existing file under the same name will be overwritten.
  > There seems to be no other way to find out the original filename but to store the file using a directory as `$savepath` and check for the basename it was stored under.



## Return Values

The returned array contains the following fields:

- `$path` - path where the file got stored
- `$size` - size of the stored file in bytes
- `$type` - mimetype if given in the FDF

## Examples

**Storing an uploaded file**

```php


<?php
  $fdf = fdf_open_string($HTTP_FDF_DATA);
  $data = fdf_get_attachment($fdf, "filename", "/tmpdir");
  echo "The uploaded file is stored in $data[path]";
?>

   
```
