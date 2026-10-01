---
id: "en-php-function-intldateformatter-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getErrorMessage"
aliases: ["datefmt_get_error_message"]
title: "Get the error text from the last operation"
signature: "public string IntlDateFormatter::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the error text from the last operation

## Description

Object-oriented style

```php
public string IntlDateFormatter::getErrorMessage()
```

Procedural style

```php
string datefmt_get_error_message(IntlDateFormatter $formatter)
```

Get the error text from the last operation.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

Description of the last error.

## Examples

**`datefmt_get_error_message()` example**

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

`datefmt_get_error_code()` `intl_get_error_code()` `intl_is_failure()`
