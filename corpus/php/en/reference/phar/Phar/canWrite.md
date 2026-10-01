---
id: "en-php-function-phar-canwrite"
language: "php"
lang: "en"
category: "function"
name: "Phar::canWrite"
title: "Returns whether phar extension supports writing and creating phars"
signature: "final public static bool Phar::canWrite()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.canwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether phar extension supports writing and creating phars

## Description

```php
final public static bool Phar::canWrite()
```

This static method determines whether write access has been disabled in the system php.ini via the phar.readonly ini variable.

## Parameters

## Return Values

`true` if write access is enabled, `false` if it is disabled.

## Examples

**A `Phar::canWrite()` example**

```php


<?php
if (Phar::canWrite()) {
    file_put_contents('phar://myphar.phar/file.txt', 'hi there');
}
?>

    
```

## See Also

phar.readonly `Phar::isWritable()`
