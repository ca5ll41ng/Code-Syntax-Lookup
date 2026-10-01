---
id: "en-php-function-function-intl-is-failure"
language: "php"
lang: "en"
category: "function"
name: "intl_is_failure"
title: "Check whether the given error code indicates failure"
signature: "bool intl_is_failure(int $errorCode)"
module: "intl"
source_url: "https://www.php.net/manual/en/function.intl-is-failure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the given error code indicates failure

## Description

```php
bool intl_is_failure(int $errorCode)
```

## Parameters

- **`$errorCode`** — is a value that returned by functions: `intl_get_error_code()`, `collator_get_error_code()` .

## Return Values

`true` if it the code indicates some failure, and `false` in case of success or a warning.

## Examples

**`intl_is_failure()` example**

```php


<?php
function check( $err_code )
{
    var_export( intl_is_failure( $err_code ) );
    echo "\n";
}

check( U_ZERO_ERROR );
check( U_USING_FALLBACK_WARNING );
check( U_ILLEGAL_ARGUMENT_ERROR );
?>

    
```

The above example will output something similar to:

```text


false
false
true

    
```

## See Also

`intl_get_error_code()` `collator_get_error_code()` `Collator-getErrorCode()`
