---
id: "en-php-function-phardata-copy"
language: "php"
lang: "en"
category: "function"
name: "PharData::copy"
title: "Copy a file internal to the tar/zip archive to another new file within the same archive"
signature: "public true PharData::copy(string $from, string $to)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy a file internal to the tar/zip archive to another new file within the same archive

## Description

```php
public true PharData::copy(string $from, string $to)
```

Copy a file internal to the tar/zip archive to another new file within the same archive. This is an object-oriented alternative to using `copy()` with the phar stream wrapper.

## Parameters

- **`$from`**
- **`$to`**

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `UnexpectedValueException` if the source file does not exist, the destination file already exists, write access is disabled, opening either file fails, reading the source file fails, or a `PharException` if writing the changes to the phar fails.

## Examples

**A `PharData::copy()` example**

This example shows using `PharData::copy()` and the equivalent stream wrapper performance of the same thing. The primary difference between the two approaches is error handling. All PharData methods throw exceptions, whereas the stream wrapper uses `trigger_error()`.

```php


<?php

try {
    $phar = new PharData('myphar.tar');

    $phar['a'] = 'hi';
    $phar->copy('a', 'b');

    echo $phar['b']; // Outputs "phar://myphar.tar/b"
} catch (Exception $e) {
    // Handle error
}

// The stream wrapper equivalent of the above code.
// E_WARNING are triggered on error rather than exceptions
copy('phar://myphar.tar/a', 'phar//myphar.tar/c');
echo file_get_contents('phar://myphar.tar/c'); // Outputs "hi"

?>

    
```
