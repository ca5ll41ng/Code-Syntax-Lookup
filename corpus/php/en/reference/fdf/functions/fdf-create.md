---
id: "en-php-function-function-fdf-create"
language: "php"
lang: "en"
category: "function"
name: "fdf_create"
title: "Create a new FDF document"
signature: "resource fdf_create()"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new FDF document

## Description

```php
resource fdf_create()
```

Creates a new FDF document.

This function is needed if one would like to populate input fields in a PDF document with data.

## Parameters

This function has no parameters.

## Return Values

Returns a FDF document handle, or `false` on error.

## Examples

**Populating a PDF document**

```php


<?php
$outfdf = fdf_create();
fdf_set_value($outfdf, "volume", $volume, 0);

fdf_set_file($outfdf, "http:/testfdf/resultlabel.pdf");
fdf_save($outfdf, "outtest.fdf");
fdf_close($outfdf);
Header("Content-type: application/vnd.fdf");
$fp = fopen("outtest.fdf", "r");
fpassthru($fp);
unlink("outtest.fdf");
?>

   
```

## See Also

 `fdf_close()` `fdf_save()` `fdf_open()`
