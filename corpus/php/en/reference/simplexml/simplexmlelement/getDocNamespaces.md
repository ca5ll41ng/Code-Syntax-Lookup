---
id: "en-php-function-simplexmlelement-getdocnamespaces"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::getDocNamespaces"
title: "Returns namespaces declared in document"
signature: "public array|false SimpleXMLElement::getDocNamespaces(bool $recursive = false, bool $fromRoot = true)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.getdocnamespaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns namespaces declared in document

## Description

```php
public array|false SimpleXMLElement::getDocNamespaces(bool $recursive = false, bool $fromRoot = true)
```

Returns namespaces declared in document

## Parameters

- **`$recursive`** — If specified, returns all namespaces declared in parent and child nodes. Otherwise, returns only namespaces declared in root node.
- **`$fromRoot`** — Allows you to recursively check namespaces under a child node instead of from the root of the XML doc.

## Return Values

The `getDocNamespaces` method returns an `array` of namespace names with their associated URIs.

## Examples

**Get document namespaces**

```php


<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns">
    <p:person id="1">John Doe</p:person>
    <p:person id="2">Susie Q. Public</p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getDocNamespaces();
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

**Working with multiple namespaces**

```php


<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns" xmlns:t="http://example.org/test">
    <p:person t:id="1">John Doe</p:person>
    <p:person t:id="2" a:addr="123 Street" xmlns:a="http://example.org/addr">
        Susie Q. Public
    </p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getDocNamespaces(TRUE);
var_dump($namespaces);

?>

    
```

The above example will output:

```text


array(3) {
  ["p"]=>
  string(21) "http://example.org/ns"
  ["t"]=>
  string(23) "http://example.org/test"
  ["a"]=>
  string(23) "http://example.org/addr"
}

    
```

## See Also

`SimpleXMLElement::getNamespaces()` `SimpleXMLElement::registerXPathNamespace()`
