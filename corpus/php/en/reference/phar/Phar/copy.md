---
id: "en-php-function-phar-copy"
language: "php"
lang: "en"
category: "function"
name: "Phar::copy"
title: "Copy a file internal to the phar archive to another new file within the phar"
signature: "public true Phar::copy(string $from, string $to)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy a file internal to the phar archive to another new file within the phar

## Description

```php
public true Phar::copy(string $from, string $to)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Copy a file internal to the phar archive to another new file within the phar. This is an object-oriented alternative to using `copy()` with the phar stream wrapper.

## Parameters

- **`$from`**
- **`$to`**

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `UnexpectedValueException` if the source file does not exist, the destination file already exists, write access is disabled, opening either file fails, reading the source file fails, or a `PharException` if writing the changes to the phar fails.

## Examples

**A `Phar::copy()` example**

This example shows using `Phar::copy()` and the equivalent stream wrapper performance of the same thing. The primary difference between the two approaches is error handling. All Phar methods throw exceptions, whereas the stream wrapper uses `trigger_error()`.

```php


<?php

try {
    $phar = new Phar('myphar.phar');

    $phar['a'] = 'hi';
    $phar->copy('a', 'b');

    echo $phar['b']; // Outputs "phar://myphar.phar/b"
} catch (Exception $e) {
    // Handle error
}

// The stream wrapper equivalent of the above code.
// E_WARNING are triggered on error rather than exceptions
copy('phar://myphar.phar/a', 'phar//myphar.phar/c');
echo file_get_contents('phar://myphar.phar/c'); // Outputs "hi"

?>

    
```
