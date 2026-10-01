---
id: "en-php-function-splfileobject-rewind"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::rewind"
title: "Rewind the file to the first line"
signature: "public void SplFileObject::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind the file to the first line

## Description

```php
public void SplFileObject::rewind()
```

Rewinds the file back to the first line.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

Throws a `RuntimeException` if cannot be rewound.

## Examples

**`SplFileObject::rewind()` example**

```php


<?php
$file = new SplFileObject("misc.txt");

// Loop over whole file
foreach ($file as $line) { }

// Rewind to first line
$file->rewind();

// Output first line
echo $file->current();
?>

    
```

## See Also

`SplFileObject::current()` `SplFileObject::key()` `SplFileObject::seek()` `SplFileObject::next()` `SplFileObject::valid()`
