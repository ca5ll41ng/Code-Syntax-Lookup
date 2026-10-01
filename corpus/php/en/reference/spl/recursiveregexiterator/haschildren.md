---
id: "en-php-function-recursiveregexiterator-haschildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveRegexIterator::hasChildren"
title: "Returns whether an iterator can be obtained for the current entry"
signature: "public bool RecursiveRegexIterator::hasChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveregexiterator.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether an iterator can be obtained for the current entry

## Description

```php
public bool RecursiveRegexIterator::hasChildren()
```

Returns whether an iterator can be obtained for the current entry. This iterator can be obtained via `RecursiveRegexIterator::getChildren()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if an iterator can be obtained for the current entry, otherwise returns `false`.

## Examples

**`RecursiveRegexIterator::hasChildren()` example**

```php


<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $value) {
    var_dump($rRegexIterator->hasChildren());
}
?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`RecursiveRegexIterator::getChildren()`
