---
id: "en-php-function-arrayiterator-next"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::next"
title: "Move to next entry"
signature: "public void ArrayIterator::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move to next entry

## Description

```php
public void ArrayIterator::next()
```

Moves the iterator to the next entry.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`ArrayIterator::next()` example**

```php


<?php
$arrayobject = new ArrayObject();

$arrayobject[] = 'zero';
$arrayobject[] = 'one';

$iterator = $arrayobject->getIterator();

while($iterator->valid()) {
    echo $iterator->key() . ' => ' . $iterator->current() . "\n";

    $iterator->next();
}
?>

    
```

The above example will output:

```text


0 => zero
1 => one

    
```
