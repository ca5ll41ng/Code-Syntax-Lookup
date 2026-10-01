---
id: "en-php-function-function-fdf-save-string"
language: "php"
lang: "en"
category: "function"
name: "fdf_save_string"
title: "Returns the FDF document as a string"
signature: "string fdf_save_string(resource $fdf_document)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-save-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the FDF document as a string

## Description

```php
string fdf_save_string(resource $fdf_document)
```

Returns the FDF document as a string.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.

## Return Values

Returns the document as a string, or `false` on error.

## Examples

**Retrieving FDF as a string**

```php


<?php
$fdf = fdf_create();
fdf_set_value($fdf, "foo", "bar");
$str = fdf_save_string($fdf);
fdf_close($fdf);
echo $str;
?>

   
```

The above example will output:

```text


%FDF-1.2
%âãÏÓ
1 0 obj
<<
/FDF << /Fields 2 0 R >>
>>
endobj
2 0 obj
[
<< /T (foo)/V (bar)>>
]
endobj
trailer
<<
/Root 1 0 R

>>
%%EOF

   
```

## See Also

 `fdf_open_string()` `fdf_close()` `fdf_create()` `fdf_save()`
