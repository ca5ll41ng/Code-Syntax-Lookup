---
id: "en-php-function-directoryiterator-getextension"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::getExtension"
title: "Gets the file extension"
signature: "public string DirectoryIterator::getExtension()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.getextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the file extension

## Description

```php
public string DirectoryIterator::getExtension()
```

Retrieves the file extension.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` containing the file extension, or an empty `string` if the file has no extension.

## Examples

**`DirectoryIterator::getExtension()` example**

```php


<?php

$directory = new DirectoryIterator(__DIR__);
foreach ($directory as $fileinfo) {
    if ($fileinfo->isFile()) {
        echo $fileinfo->getExtension() . "\n";
    }
}

?>

   
```

The above example will output something similar to:

```text


php
txt
jpg
gz

   
```

## Notes

> Another way of getting the extension is to use the `pathinfo()` function.
>
> ```php <?php $extension = pathinfo($fileinfo->getFilename(), PATHINFO_EXTENSION); ?> ```

## See Also

 `DirectoryIterator::getFilename()` `DirectoryIterator::getBasename()` `pathinfo()`
