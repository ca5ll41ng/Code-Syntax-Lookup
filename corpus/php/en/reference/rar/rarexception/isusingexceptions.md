---
id: "en-php-function-rarexception-isusingexceptions"
language: "php"
lang: "en"
category: "function"
name: "RarException::isUsingExceptions"
title: "Check whether error handling with exceptions is in use"
signature: "public static bool RarException::isUsingExceptions()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarexception.isusingexceptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether error handling with exceptions is in use

## Description

```php
public static bool RarException::isUsingExceptions()
```

Checks whether the RAR functions will emit warnings and return error values or whether they will throw exceptions in most of the circumstances (does not include some programmatic errors such as passing the wrong type of arguments).

## Parameters

This function has no parameters.

## Return Values

Returns `true` if exceptions are being used, `false` otherwise.

## Examples

**`RarException::isUsingExceptions()` example**

```php


<?php
//The default is not to use exceptions
var_dump(RarException::isUsingExceptions());
?>

   
```

The above example will output something similar to:

```text


bool(false)

   
```

## See Also

 `RarException::setUsingExceptions()`
