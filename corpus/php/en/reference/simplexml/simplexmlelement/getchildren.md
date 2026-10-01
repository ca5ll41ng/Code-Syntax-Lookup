---
id: "en-php-function-simplexmlelement-getchildren"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::getChildren"
title: "Returns the sub-elements of the current element"
signature: "public SimpleXMLElement|null SimpleXMLElement::getChildren()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.getchildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sub-elements of the current element

## Description

```php
public SimpleXMLElement|null SimpleXMLElement::getChildren()
```

> Prior to PHP 8.0, `SimpleXMLElement::getChildren()` was only declared on the subclass `SimpleXMLIterator`.

This method returns a `SimpleXMLElement` object containing sub-elements of the current `SimpleXMLElement` element.

## Parameters

This function has no parameters.

## Return Values

Returns a `SimpleXMLElement` object containing the sub-elements of the current element.

## Examples

**Return the sub-elements of the current element**

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
    foreach($xmlElement->getChildren() as $name => $data) {
    echo "The $name is '$data' from the class " . get_class($data) . "\n";
    }
}
?>

    
```

The above example will output:

```text


The title is 'PHP Basics' from the class SimpleXMLElement
The author is 'Jim Smith' from the class SimpleXMLElement

    
```
