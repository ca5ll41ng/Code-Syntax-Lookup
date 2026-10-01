---
id: "en-php-function-phar-running"
language: "php"
lang: "en"
category: "function"
name: "Phar::running"
title: "Returns the full path on disk or full phar URL to the currently executing Phar archive"
signature: "final public static string Phar::running(bool $returnPhar = true)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.running.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the full path on disk or full phar URL to the currently executing Phar archive

## Description

```php
final public static string Phar::running(bool $returnPhar = true)
```

Returns the full path to the running phar archive. This is intended for use much like the `__FILE__` magic constant, and only has effect inside an executing phar archive.

Inside the stub of an archive, `Phar::running()` returns `""`. Simply use `__FILE__` to access the current running phar inside a stub.

## Parameters

- **`$returnPhar`** — If `false`, the full path on disk to the phar archive is returned. If `true`, a full phar URL is returned.

## Return Values

Returns the filename if valid, empty string otherwise.

## Examples

**A `Phar::running()` example**

For the following example, assume the phar archive is located at `/path/to/phar/my.phar`.

```php


<?php
$a = Phar::running(); // $a is "phar:///path/to/my.phar"
$b = Phar::running(false); // $b is "/path/to/my.phar"
?>

    
```
