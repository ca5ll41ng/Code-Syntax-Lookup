---
id: "en-php-function-function-fdf-next-field-name"
language: "php"
lang: "en"
category: "function"
name: "fdf_next_field_name"
title: "Get the next field name"
signature: "string fdf_next_field_name(resource $fdf_document, [string $fieldname = ...])"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-next-field-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the next field name

## Description

```php
string fdf_next_field_name(resource $fdf_document, [string $fieldname = ...])
```

Gets the name of the field after the given field. This name can be used with several functions.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string. If not given, the first field will be assumed.

## Return Values

Returns the field name as a string.

## Examples

**Detecting all fieldnames in a FDF**

```php


<?php
$fdf = fdf_open($HTTP_FDF_DATA);
for ($field = fdf_next_field_name($fdf);
    $field != "";
    $field = fdf_next_field_name($fdf, $field)) {
    echo "field: $field\n";
}
?>

   
```

## See Also

 `fdf_get_value()`
