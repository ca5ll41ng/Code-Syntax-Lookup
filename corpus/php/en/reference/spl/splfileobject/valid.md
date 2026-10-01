---
id: "en-php-function-splfileobject-valid"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::valid"
title: "Not at EOF"
signature: "public bool SplFileObject::valid()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Not at EOF

## Description

```php
public bool SplFileObject::valid()
```

Check whether EOF has been reached.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if not reached EOF, `false` otherwise.

## Examples

**`SplFileObject::valid()` example**

```php


<?php
// Loop over a file, line by line
$file = new SplFileObject("file.txt");
while ($file->valid()) {
    echo $file->fgets();
}
?>

    
```

## See Also

`SplFileObject::current()` `SplFileObject::key()` `SplFileObject::seek()` `SplFileObject::next()` `SplFileObject::rewind()`
