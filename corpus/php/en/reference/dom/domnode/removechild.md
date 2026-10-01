---
id: "en-php-function-domnode-removechild"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::removeChild"
title: "Removes child from list of children"
signature: "public DOMNode|false DOMNode::removeChild(DOMNode $child)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.removechild.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes child from list of children

## Description

```php
public DOMNode|false DOMNode::removeChild(DOMNode $child)
```

This function removes a child from a list of children.

## Parameters

- **`$child`** — The removed child.

## Return Values

If the child could be removed the function returns the old child or `false` on error.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if this node is readonly.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$child` is not a child of this node.

## Examples

The following example will delete the `chapter` element of our XML document.

**Removing a child**

```php


<?php

$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$book = $doc->documentElement;

// we retrieve the chapter and remove it from the book
$chapter = $book->getElementsByTagName('chapter')->item(0);
$oldchapter = $book->removeChild($chapter);

echo $doc->saveXML();
?>
    
```

The above example will output:

```xml


<?xml version="1.0" encoding="utf-8"?>

<book id="listing">
 <title>My lists</title>
 
</book>

    
```

## See Also

`DOMChildNode::remove()` `DOMNode::appendChild()` `DOMNode::replaceChild()`
