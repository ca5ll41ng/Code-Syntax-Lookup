---
id: "en-php-function-recursiveiterator-haschildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveIterator::hasChildren"
title: "Returns if an iterator can be created for the current entry"
signature: "public bool RecursiveIterator::hasChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveiterator.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns if an iterator can be created for the current entry

## Description

```php
public bool RecursiveIterator::hasChildren()
```

Returns if an iterator can be created for the current entry. `RecursiveIterator::getChildren()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current entry can be iterated over, otherwise returns `false`.

## See Also

`RecursiveIterator::getChildren()`
