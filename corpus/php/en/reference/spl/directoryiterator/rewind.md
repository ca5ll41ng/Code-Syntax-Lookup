---
id: "en-php-function-directoryiterator-rewind"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::rewind"
title: "Rewind the DirectoryIterator back to the start"
signature: "public void DirectoryIterator::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind the DirectoryIterator back to the start

## Description

```php
public void DirectoryIterator::rewind()
```

Rewind the `DirectoryIterator` back to the start.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`DirectoryIterator::rewind()` example**

```php


<?php
$iterator = new DirectoryIterator(dirname(__FILE__));

$iterator->next();
echo $iterator->key(); //1

$iterator->rewind(); //rewinding to the beginning
echo $iterator->key(); //0
?>

    
```

## See Also

`DirectoryIterator::current()` `DirectoryIterator::key()` `DirectoryIterator::next()` `DirectoryIterator::valid()` `Iterator::rewind()`
