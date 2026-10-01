---
id: "en-php-function-function-intl-get-error-message"
language: "php"
lang: "en"
category: "function"
name: "intl_get_error_message"
title: "Get description of the last error"
signature: "string intl_get_error_message()"
module: "intl"
source_url: "https://www.php.net/manual/en/function.intl-get-error-message.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get description of the last error

## Description

```php
string intl_get_error_message()
```

Get error message from last internationalization function called.

## Parameters

This function has no parameters.

## Return Values

Description of an error occurred in the last API function call.

## Examples

**`intl_get_error_message()` example**

```php


<?php

$bundle = resourcebundle_create('en_US', __DIR__ . '/does-not-exist', false);

if ($bundle === null) {
    $errorCode = intl_get_error_code();

    printf("Error name: %s\n", intl_error_name($errorCode));
    printf("Error message: %s\n", intl_get_error_message());
}

   
```

The above example will output:

```text


Error name: U_MISSING_RESOURCE_ERROR
Error message: resourcebundle_create(): Cannot load libICU resource bundle: U_MISSING_RESOURCE_ERROR

  
```

## See Also

`intl_error_name()` `intl_get_error_code()` `intl_is_failure()` `collator_get_error_message()` `numfmt_get_error_message()`
