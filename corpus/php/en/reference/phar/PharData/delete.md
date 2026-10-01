---
id: "en-php-function-phardata-delete"
language: "php"
lang: "en"
category: "function"
name: "PharData::delete"
title: "Delete a file within a tar/zip archive"
signature: "public true PharData::delete(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a file within a tar/zip archive

## Description

```php
public true PharData::delete(string $localName)
```

Delete a file within an archive. This is the functional equivalent of calling `unlink()` on the stream wrapper equivalent, as shown in the example below.

## Parameters

- **`$localName`** — Path within an archive to the file to delete.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `PharException` if errors occur while flushing changes to disk.

## Examples

**A `PharData::delete()` example**

```php


<?php
try {
    $phar = new PharData('myphar.zip');
    $phar->delete('unlink/me.php');
    // this is equivalent to:
    unlink('phar://myphar.phar/unlink/me.php');
} catch (Exception $e) {
    // handle errors
}
?>

    
```

## See Also

`Phar::delete()`
