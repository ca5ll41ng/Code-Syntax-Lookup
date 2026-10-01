---
id: "en-php-function-phar-mungserver"
language: "php"
lang: "en"
category: "function"
name: "Phar::mungServer"
title: "Defines a list of up to 4 $_SERVER variables that should be modified for execution"
signature: "final public static void Phar::mungServer(array $variables)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.mungserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Defines a list of up to 4 $_SERVER variables that should be modified for execution

## Description

```php
final public static void Phar::mungServer(array $variables)
```

`Phar::mungServer()` should only be called within the stub of a phar archive.

Defines a list of up to 4 `$_SERVER` variables that should be modified for execution. Variables that can be modified to remove traces of phar execution are `REQUEST_URI`, `PHP_SELF`, `SCRIPT_NAME` and `SCRIPT_FILENAME`.

On its own, this method does nothing. Only when combined with `Phar::webPhar()` does it take effect, and only when the requested file is a PHP file to be parsed. Note that the `PATH_INFO` and `PATH_TRANSLATED` variables are always modified.

The original values of variables that are modified are stored in the SERVER array with `PHAR_` prepended, so for instance `SCRIPT_NAME` would be saved as `PHAR_SCRIPT_NAME`.

## Parameters

- **`$variables`** — An array of any of the strings `REQUEST_URI`, `PHP_SELF`, `SCRIPT_NAME` and `SCRIPT_FILENAME`. Other values trigger an exception, and `Phar::mungServer()` is case-sensitive.

## Return Values

No return.

## Errors/Exceptions

Throws `UnexpectedValueException` if any problems are found with the passed in data.

## Examples

**A `Phar::mungServer()` example**

```php


<?php
// example stub
Phar::mungServer(array('REQUEST_URI'));
Phar::webPhar();
__HALT_COMPILER();
?>

    
```

## See Also

`Phar::webPhar()` `Phar::setStub()`
