---
id: "en-php-function-function-pcntl-get-last-error"
language: "php"
lang: "en"
category: "function"
name: "pcntl_get_last_error"
title: "Retrieve the error number set by the last pcntl function which failed"
signature: "int pcntl_get_last_error()"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-get-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the error number set by the last pcntl function which failed

## Description

```php
int pcntl_get_last_error()
```

Retrieve the error number (`errno`) set by the last pcntl function that failed. The system error message associated with the error number may be checked with `pcntl_strerror()`.

## Parameters

This function has no parameters.

## Return Values

Returns the error number (`errno`) set by the last pcntl function that failed. If there was no error, 0 is returned.

## Examples

**`pcntl_get_last_error()` example**

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

 `pcntl_strerror()`
