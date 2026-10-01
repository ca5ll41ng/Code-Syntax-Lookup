---
id: "en-php-function-recursivearrayiterator-getchildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveArrayIterator::getChildren"
title: "Returns an iterator for the current entry if it is an `array` or an `object`"
signature: "public RecursiveArrayIterator|null RecursiveArrayIterator::getChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivearrayiterator.getchildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an iterator for the current entry if it is an `array` or an `object`

## Description

```php
public RecursiveArrayIterator|null RecursiveArrayIterator::getChildren()
```

Returns an iterator for the current iterator entry.

## Parameters

This function has no parameters.

## Return Values

An iterator for the current entry, if it is an `array` or `object`; or `null` on failure.

## Errors/Exceptions

An `InvalidArgumentException` will be thrown if the current entry does not contain an `array` or an `object`.

## Examples

**`RecursiveArrayIterator::getChildren()` example**

```php


<?php
$fruits = array("a" => "lemon", "b" => "orange", array("a" => "apple", "p" => "pear"));

$iterator = new RecursiveArrayIterator($fruits);

while ($iterator->valid()) {

    if ($iterator->hasChildren()) {
        // print all children
        foreach ($iterator->getChildren() as $key => $value) {
            echo $key . ' : ' . $value . "\n";
        }
    } else {
        echo "No children.\n";
    }

    $iterator->next();
}
?>

    
```

The above example will output:

```text


No children.
No children.
a : apple
p : pear

    
```

## See Also

`RecursiveArrayIterator::hasChildren()`
