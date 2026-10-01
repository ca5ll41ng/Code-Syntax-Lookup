---
id: "en-php-function-simplexmlelement-rewind"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::rewind"
title: "Rewind to the first element"
signature: "public void SimpleXMLElement::rewind()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewind to the first element

## Description

```php
public void SimpleXMLElement::rewind()
```

> Prior to PHP 8.0, `SimpleXMLElement::rewind()` was only declared on the subclass `SimpleXMLIterator`.

This method rewinds the `SimpleXMLElement` to the first element.

> As of PHP 8.4.0, calling get methods (such as `SimpleXMLElement::asXML()` or `SimpleXMLElement::getName()`) or casting a `SimpleXMLElement` to a `string` no longer implicitly rewinds the iterator. Where required, the iterator must be rewound explicitly by calling this method.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**Rewind to the first element**

```php


<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP Basics</book><book>XML Basics</book></books>');
$xmlElement->rewind();

var_dump($xmlElement->current());
?>

    
```

The above example will output:

```text


object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "PHP Basics"
}

    
```
