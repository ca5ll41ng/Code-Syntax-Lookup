---
id: "en-php-function-splfileobject-seek"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::seek"
title: "Seek to specified line"
signature: "public void SplFileObject::seek(int $line)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seek to specified line

## Description

```php
public void SplFileObject::seek(int $line)
```

Seek to specified line in the file.

## Parameters

- **`$line`** — The zero-based line number to seek to.

## Return Values

No value is returned.

## Errors/Exceptions

Throws a `LogicException` if the `$line` is negative.

## Examples

**`SplFileObject::seek()` example**

This example outputs the third line of the script which is found at position 2.

```php


<?php
$file = new SplFileObject(__FILE__);
$file->seek(2);
echo $file->current();
?>

    
```

The above example will output something similar to:

```text


$file->seek(2);


    
```

## See Also

`SplFileObject::current()` `SplFileObject::key()` `SplFileObject::next()` `SplFileObject::rewind()` `SplFileObject::valid()`
