---
id: "en-php-function-splfileobject-next"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::next"
title: "Read next line"
signature: "public void SplFileObject::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read next line

## Description

```php
public void SplFileObject::next()
```

Moves ahead to the next line in the file.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`SplFileObject::next()` example**

```php


<?php
// Read through file line by line
$file = new SplFileObject("misc.txt");
while (!$file->eof()) {
    echo $file->current();
    $file->next();
}
?>

    
```

## See Also

`SplFileObject::current()` `SplFileObject::key()` `SplFileObject::seek()` `SplFileObject::rewind()` `SplFileObject::valid()`
