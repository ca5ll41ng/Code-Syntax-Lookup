---
id: "en-php-function-function-fdf-set-file"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_file"
title: "Set PDF document to display FDF data in"
signature: "bool fdf_set_file(resource $fdf_document, string $url, [string $target_frame = ...])"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set PDF document to display FDF data in

## Description

```php
bool fdf_set_file(resource $fdf_document, string $url, [string $target_frame = ...])
```

Selects a different PDF document to display the form results in than the form it originated from.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$url`** — Should be given as an absolute URL.
- **`$target_frame`** — Use this parameter to specify the frame in which the document will be displayed. You can also set the default value for this parameter using `fdf_set_target_frame()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Passing FDF data to a second form**

```php


<?php
  /* set content type for Adobe FDF */
  fdf_header();

  /* start new fdf */
  $fdf = fdf_create();

  /* set field "foo" to value "bar" */
  fdf_set_value($fdf, "foo", "bar");

  /* tell client to display FDF data using "fdf_form.pdf" */
  fdf_set_file($fdf, "http://www.example.com/fdf_form.pdf");

  /* output fdf */
  fdf_save($fdf);

  /* clean up */
  fdf_close($fdf);
?>

   
```

## See Also

 `fdf_get_file()` `fdf_set_target_frame()`
