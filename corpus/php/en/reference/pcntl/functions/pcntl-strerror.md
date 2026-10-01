---
id: "en-php-function-function-pcntl-strerror"
language: "php"
lang: "en"
category: "function"
name: "pcntl_strerror"
title: "Retrieve the system error message associated with the given errno"
signature: "string pcntl_strerror(int $error_code)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the system error message associated with the given errno

## Description

```php
string pcntl_strerror(int $error_code)
```

Returns the system error message associated with the given `$error_code` (`errno`) of the last pcntl function that failed. The `$error_code` parameter may be obtained by calling `pcntl_get_last_error()`.

## Parameters

- **`$error_code`** — An error number (`errno`), returned by `pcntl_get_last_error()`.

## Return Values

Returns the error message, as a string.

## Examples

**`pcntl_strerror()` example**

This example will attempt to wait on child processes in a situation where no child process exists, then will print out the corresponding error message.

```php


<?php
$pid = pcntl_wait($status);
if ($pid === -1) {
    $errno = pcntl_get_last_error();
    $message = pcntl_strerror($errno);
    fwrite(STDERR, 'pcntl_wait failed with errno ' . $errno
           . ': ' . $message . PHP_EOL);
}

   
```

The above example will output something similar to:

```text


pcntl_wait failed with errno 10: No child processes

   
```

## See Also

 `pcntl_get_last_error()`
