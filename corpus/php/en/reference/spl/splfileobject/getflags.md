---
id: "en-php-function-splfileobject-getflags"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::getFlags"
title: "Gets flags for the SplFileObject"
signature: "public int SplFileObject::getFlags()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.getflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets flags for the SplFileObject

## Description

```php
public int SplFileObject::getFlags()
```

Gets the flags set for an instance of SplFileObject as an `int`.

## Parameters

This function has no parameters.

## Return Values

Returns an `int` representing the flags.

## Examples

**`SplFileObject::getFlags()` example**

```php


<?php
$file = new SplFileObject(__FILE__, "r");

if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {
    echo "Skipping empty lines\n";
} else {
    echo "Not skipping empty lines\n";
}

$file->setFlags(SplFileObject::SKIP_EMPTY);

if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {
    echo "Skipping empty lines\n";
} else {
    echo "Not skipping empty lines\n";
}
?>

    
```

The above example will output something similar to:

```text


Not skipping empty lines
Skipping empty lines


    
```

## See Also

`SplFileObject::setFlags()`
