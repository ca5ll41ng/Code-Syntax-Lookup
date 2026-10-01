---
id: "en-php-function-function-intl-get-error-code"
language: "php"
lang: "en"
category: "function"
name: "intl_get_error_code"
title: "Get the last error code"
signature: "int intl_get_error_code()"
module: "intl"
source_url: "https://www.php.net/manual/en/function.intl-get-error-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the last error code

## Description

```php
int intl_get_error_code()
```

Useful to handle errors occurred in static methods when there's no object to get error code from.

## Parameters

This function has no parameters.

## Return Values

Error code returned by the last API function call.

## Examples

**`intl_get_error_code()` example**

```php


<?php
$coll = collator_create( '<bad_param>' );
if( !$coll ) {
    handle_error( intl_get_error_code() );
}
?>

    
```

## See Also

`intl_is_failure()` `intl_error_name()` `intl_get_error_message()` `collator_get_error_code()` `numfmt_get_error_code()`
