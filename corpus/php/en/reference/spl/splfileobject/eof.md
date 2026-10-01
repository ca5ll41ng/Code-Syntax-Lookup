---
id: "en-php-function-splfileobject-eof"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::eof"
title: "Reached end of file"
signature: "public bool SplFileObject::eof()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.eof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reached end of file

## Description

```php
public bool SplFileObject::eof()
```

Determine whether the end of file has been reached

## Parameters

This function has no parameters.

## Return Values

Returns `true` if file is at EOF, `false` otherwise.

## Examples

**`SplFileObject::eof()` example**

```php


<?php
$file = new SplFileObject("fruits.txt");
while ( ! $file->eof()) {
    echo $file->fgets();
}
?>

    
```

The above example will output something similar to:

```text


apple
banana
cherry
date
elderberry

    
```

## See Also

`SplFileObject::valid()` `feof()`
