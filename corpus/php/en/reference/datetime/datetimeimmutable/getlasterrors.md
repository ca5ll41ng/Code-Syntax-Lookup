---
id: "en-php-function-datetimeimmutable-getlasterrors"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::getLastErrors"
title: "Returns the warnings and errors"
signature: "public static array|false DateTimeImmutable::getLastErrors()"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.getlasterrors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the warnings and errors

## Description

```php
public static array|false DateTimeImmutable::getLastErrors()
```

Returns an array of warnings and errors found while parsing a date/time string.

## Parameters

This function has no parameters.

## Return Values

Returns array containing info about warnings and errors, or `false` if there are neither warnings nor errors.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | Before PHP 8.2.0, this function did not return `false` when there were no warnings or errors. Instead, it would always return the documented array structure. |

## Examples

**`DateTimeImmutable::getLastErrors()` example**

```php


<?php
try {
    $date = new DateTimeImmutable('asdfasdf');
} catch (Exception $e) {
    // For demonstration purposes only...
    print_r(DateTimeImmutable::getLastErrors());

    // The real object-oriented way to do this is
    echo $e->getMessage();
}
?>

   
```

The above example will output:

```text


Array
(
    [warning_count] => 1
    [warnings] => Array
        (
            [6] => Double timezone specification
        )

    [error_count] => 1
    [errors] => Array
        (
            [0] => The timezone could not be found in the database
        )
)
Failed to parse time string (asdfasdf) at position 0 (a): The timezone could not be found in the database

   
```

The indexes 6, and 0 in the example output refer to the character index in the string where the error occurred.

**Detecting rolled over dates**

```php


<?php
$date = DateTimeImmutable::createFromFormat('!Y-m-d', '2020-02-30');
print_r(DateTimeImmutable::getLastErrors());

   
```

The above example will output:

```text


Array
(
    [warning_count] => 1
    [warnings] => Array
        (
            [10] => The parsed date was invalid
        )

    [error_count] => 0
    [errors] => Array
        (
        )
)

   
```
