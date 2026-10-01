---
id: "en-php-function-simplexmlelement-current"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::current"
title: "Returns the current element"
signature: "public SimpleXMLElement SimpleXMLElement::current()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current element

## Description

```php
public SimpleXMLElement SimpleXMLElement::current()
```

> Prior to PHP 8.0, `SimpleXMLElement::current()` was only declared on the subclass `SimpleXMLIterator`.

This method returns the current element as a `SimpleXMLElement` object.

## Parameters

This function has no parameters.

## Return Values

Returns the current element as a `SimpleXMLElement` object.

## Errors/Exceptions

Throws an `Error` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | An `Error` is now thrown if `SimpleXMLElement::current()` is called on an invalid iterator. Previously, `null` was returned. |

## Examples

**Return the current element**

```php


<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP basics</book><book>XML basics</book></books>');

$xmlElement->rewind(); // rewind to first element, otherwise current() won't work
var_dump($xmlElement->current());
?>

    
```

The above example will output:

```text


object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "PHP basics"
}

    
```

## See Also

`SimpleXMLElement::key()` `SimpleXMLElement::next()` `SimpleXMLElement::rewind()` `SimpleXMLElement::valid()` `SimpleXMLElement`
