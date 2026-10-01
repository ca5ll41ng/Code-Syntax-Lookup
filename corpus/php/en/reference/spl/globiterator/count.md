---
id: "en-php-function-globiterator-count"
language: "php"
lang: "en"
category: "function"
name: "GlobIterator::count"
title: "Get the number of directories and files"
signature: "public int GlobIterator::count()"
module: "spl"
source_url: "https://www.php.net/manual/en/globiterator.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the number of directories and files

## Description

```php
public int GlobIterator::count()
```

Gets the number of directories and files found by the glob expression.

## Parameters

This function has no parameters.

## Return Values

The number of returned directories and files, as an `int`.

## Examples

**`GlobIterator::count()` example**

```php


<?php
$iterator = new GlobIterator('*.xml');

printf("Matched %d item(s)\r\n", $iterator->count());
?>

    
```

The above example will output something similar to:

```text


Matched 8 item(s)

    
```

## See Also

`GlobIterator::__construct()` `count()` `glob()`
