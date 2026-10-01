---
id: "en-php-function-domdocument-createelement"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createElement"
title: "Create new element node"
signature: "public DOMElement|false DOMDocument::createElement(string $localName, string $value = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new element node

## Description

```php
public DOMElement|false DOMDocument::createElement(string $localName, string $value = "")
```

This function creates a new instance of class `DOMElement`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$localName`** — The tag name of the element.
- **`$value`** — The value of the element. By default, an empty element will be created. The value can also be set later with DOMElement::$nodeValue. — The value is used verbatim except that the < and > entity references will escaped. Note that & has to be manually escaped; otherwise it is regarded as starting an entity reference. Also " won't be escaped.

## Return Values

Returns a new instance of class `DOMElement` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$localName` contains an invalid character.

## Examples

**Creating a new element and inserting it as root**

```php


<?php

$dom = new DOMDocument('1.0', 'utf-8');

$element = $dom->createElement('test', 'This is the root element!');

// We insert the new element as root (child of the document)
$dom->appendChild($element);

echo $dom->saveXML();
?>

    
```

The above example will output:

```xml


<?xml version="1.0" encoding="utf-8"?>
<test>This is the root element!</test>

    
```

**Passing text containing an unescaped & as `$value`**

```php


<?php
$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->createElement('foo', 'me & you');
$dom->appendChild($element);
echo $dom->saveXML();
?>

    
```

The above example will output something similar to:

```text


Warning: DOMDocument::createElement(): unterminated entity reference             you in /in/BjTCg on line 4
<?xml version="1.0" encoding="utf-8"?>
<foo/>

    
```

## Notes

> The `$value` will *not* be escaped. Use `DOMDocument::createTextNode()` to create a text node with *escaping support*.

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
