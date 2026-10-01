---
id: "en-php-function-intldateformatter-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getErrorCode"
aliases: ["datefmt_get_error_code"]
title: "Get the error code from last operation"
signature: "public int IntlDateFormatter::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the error code from last operation

## Description

Object-oriented style

```php
public int IntlDateFormatter::getErrorCode()
```

Procedural style

```php
int datefmt_get_error_code(IntlDateFormatter $formatter)
```

Returns the error code from the last formatting operation.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

The error code, one of UErrorCode values. Initial value is U_ZERO_ERROR.

## Examples

**`datefmt_get_error_code()` example**

```php


<?php

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$str = datefmt_format($fmt, 0);

printf(
    "ERROR: %s (%d)\n",
    datefmt_get_error_message($fmt),
    datefmt_get_error_code($fmt)
);
?>

   
```

**OO example**

```php


<?php

$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$str = $fmt->format(0);

printf(
    "ERROR: %s (%d)\n",
    $fmt->getErrorMessage(),
    $fmt->getErrorCode()
);
?>

   
```

The above example will output:

```text


ERROR: U_ZERO_ERROR (0)

  
```

## See Also

`datefmt_get_error_message()` `intl_get_error_code()` `intl_is_failure()`
