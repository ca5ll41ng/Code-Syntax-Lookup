---
id: "en-php-function-splobjectstorage-removeallexcept"
language: "php"
lang: "en"
category: "function"
name: "SplObjectStorage::removeAllExcept"
title: "Removes all objects except for those contained in another storage from the current storage"
signature: "public int SplObjectStorage::removeAllExcept(SplObjectStorage $storage)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobjectstorage.removeallexcept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all objects except for those contained in another storage from the current storage

## Description

```php
public int SplObjectStorage::removeAllExcept(SplObjectStorage $storage)
```

Removes all objects except for those contained in another storage from the current storage.

## Parameters

- **`$storage`** — The storage containing the elements to retain in the current storage.

## Return Values

Returns the number of remaining objects.

## Examples

**`SplObjectStorage::removeAllExcept()` example**

```php


<?php
$a = (object) 'a'; 
$b = (object) 'b'; 
$c = (object) 'c'; 

$foo = new SplObjectStorage;
$foo->attach($a);
$foo->attach($b);

$bar = new SplObjectStorage;
$bar->attach($b);
$bar->attach($c);

$foo->removeAllExcept($bar);
var_dump($foo->contains($a));
var_dump($foo->contains($b));
?>

    
```

The above example will output something similar to:

```text


bool(false)
bool(true)

    
```
