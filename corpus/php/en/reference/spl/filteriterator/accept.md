---
id: "en-php-function-filteriterator-accept"
language: "php"
lang: "en"
category: "function"
name: "FilterIterator::accept"
title: "Check whether the current element of the iterator is acceptable"
signature: "public bool FilterIterator::accept()"
module: "spl"
source_url: "https://www.php.net/manual/en/filteriterator.accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the current element of the iterator is acceptable

## Description

```php
public bool FilterIterator::accept()
```

Returns whether the current element of the iterator is acceptable through this filter.

## Parameters

This function has no parameters.

## Return Values

`true` if the current element is acceptable, otherwise `false`.

## Examples

**`FilterIterator::accept()` example**

```php


<?php
// This iterator filters all values with less than 10 characters
class LengthFilterIterator extends FilterIterator {

    public function accept() {
        // Only accept strings with a length of 10 and greater
        return strlen(parent::current()) >= 10;
    }

}

$arrayIterator = new ArrayIterator(array('test1', 'more than 10 characters'));
$lengthFilter = new LengthFilterIterator($arrayIterator);

foreach ($lengthFilter as $value) {
    echo $value . "\n";
}
?>

    
```

The above example will output:

```text


more than 10 characters

    
```
