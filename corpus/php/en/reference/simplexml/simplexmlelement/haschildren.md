---
id: "en-php-function-simplexmlelement-haschildren"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::hasChildren"
title: "Checks whether the current element has sub elements"
signature: "public bool SimpleXMLElement::hasChildren()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.haschildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks whether the current element has sub elements

## Description

```php
public bool SimpleXMLElement::hasChildren()
```

> Prior to PHP 8.0, `SimpleXMLElement::hasChildren()` was only declared on the subclass `SimpleXMLIterator`.

This method checks whether the current `SimpleXMLElement` element has sub-elements.

## Parameters

This function has no parameters.

## Return Values

`true` if the current element has sub-elements, otherwise `false`

## Examples

**Check whether the current element has sub-elements**

```php


<?php
$xml = <<<XML
<books>
    <book>
        <title>PHP Basics</title>
        <author>Jim Smith</author>
    </book>
    <book>XML basics</book>
</books>
XML;

$xmlElement = new SimpleXMLElement($xml);
for ($xmlElement->rewind(); $xmlElement->valid(); $xmlElement->next()) {
    if ($xmlElement->hasChildren()) {
        var_dump($xmlElement->current());
    }
}
?>

    
```

The above example will output:

```text


object(SimpleXMLElement)#2 (2) {
  ["title"]=>
  string(10) "PHP Basics"
  ["author"]=>
  string(9) "Jim Smith"
}

    
```
