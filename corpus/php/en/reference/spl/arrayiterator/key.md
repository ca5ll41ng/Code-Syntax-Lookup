---
id: "en-php-function-arrayiterator-key"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::key"
title: "Return current array key"
signature: "public string|int|null ArrayIterator::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return current array key

## Description

```php
public string|int|null ArrayIterator::key()
```

This function returns the current array key

## Parameters

This function has no parameters.

## Return Values

The current `array` key.

## Examples

**`ArrayIterator::key()` example**

```php


<?php
$array = array('key' => 'value');

$arrayobject = new ArrayObject($array);
$iterator = $arrayobject->getIterator();

echo $iterator->key(); //key
?>

    
```
