---
id: "en-php-function-spltempfileobject-construct"
language: "php"
lang: "en"
category: "function"
name: "SplTempFileObject::__construct"
title: "Construct a new temporary file object"
signature: "public SplTempFileObject::__construct(int $maxMemory = 2 * 1024 * 1024)"
module: "spl"
source_url: "https://www.php.net/manual/en/spltempfileobject.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new temporary file object

## Description

```php
public SplTempFileObject::__construct(int $maxMemory = 2 * 1024 * 1024)
```

Construct a new temporary file object.

## Parameters

- **`$maxMemory`** — The maximum amount of memory (in bytes, default is 2 MB) for the temporary file to use. If the temporary file exceeds this size, it will be moved to a file in the system's temp directory. — If `$maxMemory` is negative, only memory will be used. If `$maxMemory` is zero, no memory will be used.

## Errors/Exceptions

Throws a `RuntimeException` if an error occurs.

## Examples

**`SplTempFileObject()` example**

This example writes a temporary file in memory which can be written to and read from.

```php


<?php
$temp = new SplTempFileObject();
$temp->fwrite("This is the first line\n");
$temp->fwrite("And this is the second.\n");
echo "Written " . $temp->ftell() . " bytes to temporary file.\n\n";

// Rewind and read what was written
$temp->rewind();
foreach ($temp as $line) {
    echo $line;
}
?>

    
```

The above example will output something similar to:

```text


Written 47 bytes to temporary file.

This is the first line
And this is the second.

    
```

## See Also

`SplFileObject` PHP input/output streams (for `php://temp` and `php://memory`)
