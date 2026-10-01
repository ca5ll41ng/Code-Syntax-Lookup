---
id: "en-php-function-norewinditerator-rewind"
language: "php"
lang: "en"
category: "function"
name: "NoRewindIterator::rewind"
title: "Prevents the rewind operation on the inner iterator"
signature: "public void NoRewindIterator::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/norewinditerator.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prevents the rewind operation on the inner iterator

## Description

```php
public void NoRewindIterator::rewind()
```

Prevents the rewind operation on the inner iterator.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`NoRewindIterator::rewind()` example**

This example demonstrates that calling rewind on a NoRewindIterator object has no effect.

```php


<?php
$fruits = array("lemon", "orange", "apple", "pear");

$noRewindIterator = new NoRewindIterator(new ArrayIterator($fruits));

echo $noRewindIterator->current() . "\n";
$noRewindIterator->next();
// now rewind the iterator (nothing should happen)
$noRewindIterator->rewind();
echo $noRewindIterator->current() . "\n";
?>

    
```

The above example will output:

```text


lemon
orange

    
```
