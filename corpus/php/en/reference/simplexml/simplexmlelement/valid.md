---
id: "en-php-function-simplexmlelement-valid"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::valid"
title: "Check whether the current element is valid"
signature: "public bool SimpleXMLElement::valid()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the current element is valid

## Description

```php
public bool SimpleXMLElement::valid()
```

> Prior to PHP 8.0, `SimpleXMLElement::valid()` was only declared on the subclass `SimpleXMLIterator`.

This method checks if the current element is valid after calls to `SimpleXMLElement::rewind()` or `SimpleXMLElement::next()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current element is valid, otherwise `false`

## Examples

**Check whether the current element is valid**

```php


<?php
$xmlElement = new SimpleXMLElement('<books><book>SQL Basics</book></books>');

$xmlElement->rewind(); // rewind to the first element
echo var_dump($xmlElement->valid()); // bool(true)

$xmlElement->next(); // advance to the next element
echo var_dump($xmlElement->valid()); // bool(false) because there is only one element
?>

    
```
