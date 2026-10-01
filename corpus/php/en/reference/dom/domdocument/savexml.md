---
id: "en-php-function-domdocument-savexml"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::saveXML"
title: "Dumps the internal XML tree back into a string"
signature: "public string|false DOMDocument::saveXML(DOMNode|null $node = null, int $options = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.savexml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dumps the internal XML tree back into a string

## Description

```php
public string|false DOMDocument::saveXML(DOMNode|null $node = null, int $options = 0)
```

Creates an XML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

## Parameters

- **`$node`** — Use this parameter to output only a specific node without XML declaration rather than the entire document.
- **`$options`** — Additional Options. The `LIBXML_NOEMPTYTAG` and `LIBXML_NOXMLDECL` options are supported. Prior to PHP 8.3.0, only the `LIBXML_NOEMPTYTAG` option is supported.

## Return Values

Returns the XML, or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$node` is from another document.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | LIBXML_NOXMLDECL is now supported. |

## Examples

**Saving a DOM tree into a string**

```php


<?php

$doc = new DOMDocument('1.0');
// we want a nice output
$doc->formatOutput = true;

$root = $doc->createElement('book');
$root = $doc->appendChild($root);

$title = $doc->createElement('title');
$title = $root->appendChild($title);

$text = $doc->createTextNode('This is the title');
$text = $title->appendChild($text);

echo "Saving all the document:\n";
echo $doc->saveXML() . "\n";

echo "Saving only the title part:\n";
echo $doc->saveXML($title);

?>

    
```

The above example will output:

```text


Saving all the document:
<?xml version="1.0"?>
<book>
  <title>This is the title</title>
</book>

Saving only the title part:
<title>This is the title</title>

    
```

## See Also

`DOMDocument::save()` `DOMDocument::load()` `DOMDocument::loadXML()`
