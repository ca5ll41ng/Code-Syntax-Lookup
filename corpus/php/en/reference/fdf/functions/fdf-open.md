---
id: "en-php-function-function-fdf-open"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "fdf_open"
title: "Open a FDF document"
signature: "resource fdf_open(string $filename)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open a FDF document

## Description

```php
resource fdf_open(string $filename)
```

Opens a file with form data.

You can also use `fdf_open_string()` to process the results of a PDF form POST request.

## Parameters

- **`$filename`** — Path to the FDF file. This file must contain the data as returned from a PDF form or created using `fdf_create()` and `fdf_save()`.

## Return Values

Returns a FDF document handle, or `false` on error.

## Examples

**Accessing the form data**

```php


<?php
// Save the FDF data into a temp file
$fdffp = fopen("test.fdf", "w");
fwrite($fdffp, $HTTP_FDF_DATA, strlen($HTTP_FDF_DATA));
fclose($fdffp);

// Open temp file and evaluate data
$fdf = fdf_open("test.fdf");
/* ... */
fdf_close($fdf);
?>

   
```

## See Also

 `fdf_open_string()` `fdf_close()` `fdf_create()` `fdf_save()`
