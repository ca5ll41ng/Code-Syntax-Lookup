---
id: "en-php-function-recursivearrayiterator-haschildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveArrayIterator::hasChildren"
title: "Returns whether current entry is an array or an object"
signature: "public bool RecursiveArrayIterator::hasChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivearrayiterator.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether current entry is an array or an object

## Description

```php
public bool RecursiveArrayIterator::hasChildren()
```

Returns whether current entry is an `array` or an `object` for which an iterator can be obtained via `RecursiveArrayIterator::getChildren()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current entry is an `array` or an `object`, otherwise `false` is returned.

## Examples

**`RecursiveArrayIterator::hasChildren()` example**

```php


<?php
$fruits = array("a" => "lemon", "b" => "orange", array("a" => "apple", "p" => "pear"));

$iterator = new RecursiveArrayIterator($fruits);

while ($iterator->valid()) {

    // Check if there are children
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

`RecursiveArrayIterator::getChildren()`
