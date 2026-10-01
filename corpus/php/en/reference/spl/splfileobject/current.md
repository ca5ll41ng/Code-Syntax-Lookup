---
id: "en-php-function-splfileobject-current"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::current"
title: "Retrieve current line of file"
signature: "public string|array|false SplFileObject::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve current line of file

## Description

```php
public string|array|false SplFileObject::current()
```

Retrieves the current line of the file.

## Parameters

This function has no parameters.

## Return Values

Retrieves the current line of the file. If the `SplFileObject::READ_CSV` flag is set, this method returns an array containing the current line parsed as CSV data. If the end of the file is reached, `false` is returned.

## Examples

**`SplFileObject::current()` example**

```php


<?php
$file = new SplFileObject(__FILE__);
foreach ($file as $k => $line) {
   echo ($file->key() + 1) . ': ' . $file->current();
}
?>

    
```

The above example will output something similar to:

```text


1: <?php
2: $file = new SplFileObject(__FILE__);
3: foreach ($file as $line) {
4:     echo ($file->key() + 1) . ': ' . $file->current();
5: }
6: ?>

    
```

## See Also

`SplFileObject::key()` `SplFileObject::seek()` `SplFileObject::next()` `SplFileObject::rewind()` `SplFileObject::valid()`
