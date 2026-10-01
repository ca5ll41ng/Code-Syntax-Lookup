---
id: "en-php-function-function-simplexml-import-dom"
language: "php"
lang: "en"
category: "function"
name: "simplexml_import_dom"
title: "Get a `SimpleXMLElement` object from an XML or HTML node"
signature: "SimpleXMLElement|null simplexml_import_dom(object $node, string|null $class_name = SimpleXMLElement::class)"
module: "simplexml"
source_url: "https://www.php.net/manual/en/function.simplexml-import-dom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a `SimpleXMLElement` object from an XML or HTML node

## Description

```php
SimpleXMLElement|null simplexml_import_dom(object $node, string|null $class_name = SimpleXMLElement::class)
```

This function takes a node of a DOM document and makes it into a SimpleXML node. This new object can then be used as a native SimpleXML element.

## Parameters

- **`$node`** — A DOM Element node
- **`$class_name`** — You may use this optional parameter so that `simplexml_import_dom()` will return an object of the specified class. That class should extend the `SimpleXMLElement` class.

## Return Values

Returns a `SimpleXMLElement` or `null` on failure.

## Errors/Exceptions

Throws a `TypeError` when passed a non-XML or non-HTML `$node`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Added support for `Dom\Document`. |
| 8.4.0 | This function now throws a `TypeError` instead of a `ValueError` when passed a non-XML or non-HTML `$node`. |

## Examples

**Importing a `DOMDocument`**

```php


<?php
$dom = new DOMDocument;
$dom->loadXML('<books><book><title>blah</title></book></books>');
if (!$dom) {
    echo 'Error while parsing the document';
    exit;
}

$s = simplexml_import_dom($dom);

echo $s->book[0]->title;
?>

    
```

The above example will output:

```text


blah

    
```

**Importing a `Dom\Document`**

```php


<?php
$dom = Dom\XMLDocument::createFromString('<books><book><title>blah</title></book></books>');

$s = simplexml_import_dom($dom);

echo $s->book[0]->title;
?>

    
```

The above example will output:

```text


blah

    
```

## See Also

`dom_import_simplexml()` `simplexml.examples-basic`
