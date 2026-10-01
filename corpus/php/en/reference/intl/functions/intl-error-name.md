---
id: "en-php-function-function-intl-error-name"
language: "php"
lang: "en"
category: "function"
name: "intl_error_name"
title: "Get symbolic name for a given error code"
signature: "string intl_error_name(int $errorCode)"
module: "intl"
source_url: "https://www.php.net/manual/en/function.intl-error-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get symbolic name for a given error code

## Description

```php
string intl_error_name(int $errorCode)
```

Return ICU error code name.

## Parameters

- **`$errorCode`** — ICU error code.

## Return Values

The returned string will be the same as the name of the error code constant.

## Examples

**`intl_error_name()` example**

```php


<?php
$coll     = collator_create( 'en_RU' );
$err_code = collator_get_error_code( $coll );

printf( "Symbolic name for %d is %s\n.", $err_code, intl_error_name( $err_code ) );
?>

    
```

The above example will output something similar to:

```text


Symbolic name for -128 is U_USING_FALLBACK_WARNING.

    
```

## See Also

`intl_is_failure()` `intl_get_error_code()` `intl_get_error_message()`
