---
id: "en-php-function-simplexmlelement-getname"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::getName"
title: "Gets the name of the XML element"
signature: "public string SimpleXMLElement::getName()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the name of the XML element

## Description

```php
public string SimpleXMLElement::getName()
```

Gets the name of the XML element.

## Parameters

This function has no parameters.

## Return Values

The `getName` method returns as a `string` the name of the XML tag referenced by the SimpleXMLElement object.

## Examples

> Listed examples may include `examples/simplexml-data.php`, which refers to the XML string found in the first example of the basic usage guide.

**Get XML element names**

```php


<?php
include 'examples/simplexml-data.php';
$sxe = new SimpleXMLElement($xmlstr);

echo $sxe->getName() . "\n";

foreach ($sxe->children() as $child)
{
    echo $child->getName() . "\n";
}

?>

    
```

The above example will output:

```text


movies
movie

    
```
