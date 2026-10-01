---
id: "en-php-function-domdocument-savehtmlfile"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::saveHTMLFile"
title: "Dumps the internal document into a file using HTML formatting"
signature: "public int|false DOMDocument::saveHTMLFile(string $filename)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.savehtmlfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dumps the internal document into a file using HTML formatting

## Description

```php
public int|false DOMDocument::saveHTMLFile(string $filename)
```

Creates an HTML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

## Parameters

- **`$filename`** — The path to the saved HTML document.

## Return Values

Returns the number of bytes written or `false` if an error occurred.

## Examples

**Saving a HTML tree into a file**

```php


<?php

$doc = new DOMDocument('1.0');
// we want a nice output
$doc->formatOutput = true;

$root = $doc->createElement('html');
$root = $doc->appendChild($root);

$head = $doc->createElement('head');
$head = $root->appendChild($head);

$title = $doc->createElement('title');
$title = $head->appendChild($title);

$text = $doc->createTextNode('This is the title');
$text = $title->appendChild($text);

echo 'Wrote: ' . $doc->saveHTMLFile("/tmp/test.html") . ' bytes'; // Wrote: 129 bytes

?>

    
```

## See Also

`DOMDocument::saveHTML()` `DOMDocument::loadHTML()` `DOMDocument::loadHTMLFile()`
