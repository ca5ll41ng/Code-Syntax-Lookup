---
id: "en-php-function-function-libxml-use-internal-errors"
language: "php"
lang: "en"
category: "function"
name: "libxml_use_internal_errors"
title: "Disable libxml errors and allow user to fetch error information as needed"
signature: "bool libxml_use_internal_errors(bool|null $use_errors = null)"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-use-internal-errors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disable libxml errors and allow user to fetch error information as needed

## Description

```php
bool libxml_use_internal_errors(bool|null $use_errors = null)
```

`libxml_use_internal_errors()` allows you to disable standard libxml errors and enable user error handling.

## Parameters

- **`$use_errors`** — Enable (`true`) user error handling or disable (`false`) user error handling. Disabling will also clear any existing libxml errors.

## Return Values

This function returns the previous value of `$use_errors`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$use_errors` is nullable now. Previously, its default was `false`. |

## Examples

**A `libxml_use_internal_errors()` example**

This example demonstrates the basic usage of libxml errors and the value returned by this function.

```php


<?php

// enable user error handling
var_dump(libxml_use_internal_errors(true));

// load the document
$doc = new DOMDocument;

if (!$doc->load('file.xml')) {
    foreach (libxml_get_errors() as $error) {
        // handle errors here
    }

    libxml_clear_errors();
}

?>

    
```

The above example will output:

```text


bool(false)

    
```

## See Also

`libxml_clear_errors()` `libxml_get_errors()`
