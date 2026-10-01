---
id: "en-php-function-simplexmlelement-next"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::next"
title: "Move to next element"
signature: "public void SimpleXMLElement::next()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move to next element

## Description

```php
public void SimpleXMLElement::next()
```

> Prior to PHP 8.0, `SimpleXMLElement::next()` was only declared on the subclass `SimpleXMLIterator`.

This method moves the `SimpleXMLElement` to the next element.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**Move to the next element**

```php


<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP Basics</book><book>XML basics</book></books>');
$xmlElement->rewind(); // rewind to the first element
$xmlElement->next();

var_dump($xmlElement->current());
?>

    
```

The above example will output:

```text


object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "XML basics"
}

    
```
