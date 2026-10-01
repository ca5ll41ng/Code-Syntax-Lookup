---
id: "en-php-function-domdocument-savehtml"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::saveHTML"
title: "Dumps the internal document into a string using HTML formatting"
signature: "public string|false DOMDocument::saveHTML(DOMNode|null $node = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.savehtml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dumps the internal document into a string using HTML formatting

## Description

```php
public string|false DOMDocument::saveHTML(DOMNode|null $node = null)
```

Creates an HTML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

## Parameters

- **`$node`** — Optional parameter to output a subset of the document.

## Return Values

Returns the HTML, or `false` if an error occurred.

## Examples

**Saving a HTML tree into a string**

```php


<?php

$doc = new DOMDocument('1.0');

$root = $doc->createElement('html');
$root = $doc->appendChild($root);

$head = $doc->createElement('head');
$head = $root->appendChild($head);

$title = $doc->createElement('title');
$title = $head->appendChild($title);

$text = $doc->createTextNode('This is the title');
$text = $title->appendChild($text);

echo $doc->saveHTML();

?>

    
```

## See Also

`DOMDocument::saveHTMLFile()` `DOMDocument::loadHTML()` `DOMDocument::loadHTMLFile()`
