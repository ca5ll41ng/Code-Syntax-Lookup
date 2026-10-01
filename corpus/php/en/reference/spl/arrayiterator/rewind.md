---
id: "en-php-function-arrayiterator-rewind"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::rewind"
title: "Rewind array back to the start"
signature: "public void ArrayIterator::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind array back to the start

## Description

```php
public void ArrayIterator::rewind()
```

This rewinds the iterator to the beginning.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`ArrayIterator::rewind()` example**

```php


<?php
$arrayobject = new ArrayObject();

$arrayobject[] = 'zero';
$arrayobject[] = 'one';
$arrayobject[] = 'two';

$iterator = $arrayobject->getIterator();

$iterator->next();
echo $iterator->key(); //1

$iterator->rewind(); //rewinding to the beginning
echo $iterator->key(); //0
?>

    
```
