---
id: "en-php-function-recursivecallbackfilteriterator-haschildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveCallbackFilterIterator::hasChildren"
title: "Check whether the inner iterator's current element has children"
signature: "public bool RecursiveCallbackFilterIterator::hasChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivecallbackfilteriterator.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the inner iterator's current element has children

## Description

```php
public bool RecursiveCallbackFilterIterator::hasChildren()
```

Returns `true` if the current element has children, `false` otherwise.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current element has children, `false` otherwise.

## Examples

**`RecursiveCallbackFilterIterator::hasChildren()` basic usage**

```php


<?php

$dir = new RecursiveDirectoryIterator(__DIR__);

// Recursively iterate over XML files
$files = new RecursiveCallbackFilterIterator($dir, function ($current, $key, $iterator) {
    // Allow recursion into directories
    if ($iterator->hasChildren()) {
        return TRUE;
    }
    // Check for XML file
    if (!strcasecmp($current->getExtension(), 'xml')) {
        return TRUE;
    }
    return FALSE;
});

?>

    
```

## See Also

RecursiveCallbackFilterIterator Examples `RecursiveCallbackFilterIterator::__construct()` `RecursiveCallbackFilterIterator::getChildren()`
