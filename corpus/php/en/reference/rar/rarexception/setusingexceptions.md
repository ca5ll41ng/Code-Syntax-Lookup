---
id: "en-php-function-rarexception-setusingexceptions"
language: "php"
lang: "en"
category: "function"
name: "RarException::setUsingExceptions"
title: "Activate and deactivate error handling with exceptions"
signature: "public static void RarException::setUsingExceptions(bool $using_exceptions)"
module: "rar"
source_url: "https://www.php.net/manual/en/rarexception.setusingexceptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Activate and deactivate error handling with exceptions

## Description

```php
public static void RarException::setUsingExceptions(bool $using_exceptions)
```

If and only if the argument is `true`, then, instead of emitting warnings and returning a special value indicating error when the UnRAR library encounters an error, an exception of type `RarException` will be thrown.

Exceptions will also be thrown for the following errors, which occur outside the library (their error code will be -1):

- attempting some operations on a closed `RarArchive` object or a `RarEntry` object relative to the first;
- attempting to get an entry that does not exist with `RarArchive::getEntry()`.

## Parameters

- **`$using_exceptions`** — Should be `true` to activate exception throwing, `false` to deactivate (the default).

## Return Values

No value is returned.

## Examples

**`RarException::setUsingExceptions()` example**

```php


<?php
var_dump(RarException::isUsingExceptions());
$arch = RarArchive::open("does_not_exist.rar");
var_dump($arch);

RarException::setUsingExceptions(true);
var_dump(RarException::isUsingExceptions());
$arch = RarArchive::open("does_not_exist.rar");
var_dump($arch); //not reached
?>

   
```

The above example will output something similar to:

```text


bool(false)

Warning: RarArchive::open(): Failed to open does_not_exist.rar: ERAR_EOPEN (file open error) in C:\php_rar\trunk\tests\test.php on line 3
bool(false)
bool(true)

Fatal error: Uncaught exception 'RarException' with message 'unRAR internal error: Failed to open does_not_exist.rar: ERAR_EOPEN (file open error)' in C:\php_rar\trunk\tests\test.php:8
Stack trace:
#0 C:\php_rar\trunk\tests\test.php(8): RarArchive::open('does_not_exist....')
#1 {main}
  thrown in C:\php_rar\trunk\tests\test.php on line 8

   
```

## See Also

 `RarException::isUsingExceptions()`
