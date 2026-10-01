---
id: "en-php-function-function-fdf-open-string"
language: "php"
lang: "en"
category: "function"
name: "fdf_open_string"
title: "Read a FDF document from a string"
signature: "resource fdf_open_string(string $fdf_data)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-open-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read a FDF document from a string

## Description

```php
resource fdf_open_string(string $fdf_data)
```

Reads form data from a string.

You can use `fdf_open_string()` together with `$HTTP_FDF_DATA` to process FDF form input from a remote client.

## Parameters

- **`$fdf_data`** — The data as returned from a PDF form or created using `fdf_create()` and `fdf_save_string()`.

## Return Values

Returns a FDF document handle, or `false` on error.

## Examples

**Accessing the form data**

```php


<?php
$fdf = fdf_open_string($HTTP_FDF_DATA);
/* ... */
fdf_close($fdf);
?>

   
```

## See Also

 `fdf_open()` `fdf_close()` `fdf_create()` `fdf_save_string()`
