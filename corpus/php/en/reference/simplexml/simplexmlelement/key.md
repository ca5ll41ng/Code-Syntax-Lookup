---
id: "en-php-function-simplexmlelement-key"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::key"
title: "Return current key"
signature: "public string SimpleXMLElement::key()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return current key

## Description

```php
public string SimpleXMLElement::key()
```

> Prior to PHP 8.0, `SimpleXMLElement::key()` was only declared on the subclass `SimpleXMLIterator`.

This method gets the XML tag name of the current element.

## Parameters

This function has no parameters.

## Return Values

Returns the XML tag name of the element referenced by the current `SimpleXMLElement` object.

## Errors/Exceptions

Throws an `Error` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | An `Error` is now thrown if `SimpleXMLElement::key()` is called on an invalid iterator. Previously, `false` was returned. |

## Examples

**Get the current XML tag key**

```php


<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP basics</book><book>XML basics</book></books>');

try {
    echo var_dump($xmlElement->key());
} catch (Error $e) {
    echo $e->getMessage(), "\n";
}

$xmlElement->rewind(); // rewind to the first element
echo var_dump($xmlElement->key());

?>

    
```

The above example will output:

```text


Iterator not initialized or already consumed
string(4) "book"

    
```
