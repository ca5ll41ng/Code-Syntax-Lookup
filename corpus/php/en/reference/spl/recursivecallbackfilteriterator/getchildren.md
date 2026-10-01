---
id: "en-php-function-recursivecallbackfilteriterator-getchildren"
language: "php"
lang: "en"
category: "function"
name: "RecursiveCallbackFilterIterator::getChildren"
title: "Return the inner iterator's children contained in a RecursiveCallbackFilterIterator"
signature: "public RecursiveCallbackFilterIterator RecursiveCallbackFilterIterator::getChildren()"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivecallbackfilteriterator.getchildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the inner iterator's children contained in a RecursiveCallbackFilterIterator

## Description

```php
public RecursiveCallbackFilterIterator RecursiveCallbackFilterIterator::getChildren()
```

Fetches the filtered children of the inner iterator.

`RecursiveCallbackFilterIterator::hasChildren()` should be used to determine if there are children to be fetched.

## Parameters

This function has no parameters.

## Return Values

Returns a `RecursiveCallbackFilterIterator` containing the children.

## See Also

RecursiveCallbackFilterIterator Examples `RecursiveCallbackFilterIterator::__construct()` `RecursiveCallbackFilterIterator::hasChildren()`
