---
id: "en-php-function-recursiveregexiterator-getchildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveRegexIterator::getChildren"
title: "Returns an iterator for the current entry"
signature: "public RecursiveRegexIterator RecursiveRegexIterator::getChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveregexiterator.getchildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an iterator for the current entry

## Description

```php
public RecursiveRegexIterator RecursiveRegexIterator::getChildren()
```

Returns an iterator for the current iterator entry.

## Parameters

This function has no parameters.

## Return Values

An iterator for the current entry, if it can be iterated over by the inner iterator.

## Errors/Exceptions

An `InvalidArgumentException` will be thrown if the current entry does not contain a value that can be iterated over by the inner iterator.

## Examples

**`RecursiveRegexIterator::getChildren()` example**

```php


<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $key1 => $value1) {

    if ($rRegexIterator->hasChildren()) {

        // print all children
        echo "Children: ";
        foreach ($rRegexIterator->getChildren() as $key => $value) {
            echo $value . " ";
        }
        echo "\n";
    } else {
        echo "No children\n";
    }

}
?>

    
```

The above example will output:

```text


No children
Children: test4 test5

    
```

## See Also

`RecursiveRegexIterator::hasChildren()`
