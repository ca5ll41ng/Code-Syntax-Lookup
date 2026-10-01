---
id: "en-php-function-simplexmlelement-attributes"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::attributes"
title: "Identifies an element's attributes"
signature: "public SimpleXMLElement|null SimpleXMLElement::attributes(string|null $namespaceOrPrefix = null, bool $isPrefix = false)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.attributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Identifies an element's attributes

## Description

```php
public SimpleXMLElement|null SimpleXMLElement::attributes(string|null $namespaceOrPrefix = null, bool $isPrefix = false)
```

This function provides the attributes and values defined within an xml tag.

> SimpleXML has made a rule of adding iterative properties to most methods. They cannot be viewed using `var_dump()` or anything else which can examine objects.

## Parameters

- **`$namespaceOrPrefix`** — An optional namespace for the retrieved attributes
- **`$isPrefix`** — Default to `false`

## Return Values

Returns a `SimpleXMLElement` object that can be iterated over to loop through the attributes on the tag.

Returns `null` if called on a `SimpleXMLElement` object that already represents an attribute and not a tag.

## Examples

**Interpret an XML string**

```php


<?php
$string = <<<XML
<a>
 <foo name="one" game="lonely">1</foo>
</a>
XML;

$xml = simplexml_load_string($string);
foreach($xml->foo[0]->attributes() as $a => $b) {
    echo $a,'="',$b,"\"\n";
}
?>

    
```

The above example will output:

```text


name="one"
game="lonely"

    
```

## See Also

`simplexml.examples-basic`
