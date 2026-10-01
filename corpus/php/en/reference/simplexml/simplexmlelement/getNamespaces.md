---
id: "en-php-function-simplexmlelement-getnamespaces"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::getNamespaces"
title: "Returns namespaces used in document"
signature: "public array SimpleXMLElement::getNamespaces(bool $recursive = false)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.getnamespaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns namespaces used in document

## Description

```php
public array SimpleXMLElement::getNamespaces(bool $recursive = false)
```

Returns namespaces used in document

## Parameters

- **`$recursive`** — If specified, returns all namespaces used in parent and child nodes. Otherwise, returns only namespaces used in root node.

## Return Values

The `getNamespaces` method returns an `array` of namespace names with their associated URIs.

## Examples

**Get document namespaces in use**

```php


<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns" xmlns:t="http://example.org/test">
    <p:person id="1">John Doe</p:person>
    <p:person id="2">Susie Q. Public</p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getNamespaces(true);
var_dump($namespaces);

?>

    
```

The above example will output:

```text


array(1) {
  ["p"]=>
  string(21) "http://example.org/ns"
}

    
```

## See Also

`SimpleXMLElement::getDocNamespaces()` `SimpleXMLElement::registerXPathNamespace()`
