---
id: "en-php-function-domdocument-save"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::save"
title: "Dumps the internal XML tree back into a file"
signature: "public int|false DOMDocument::save(string $filename, int $options = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dumps the internal XML tree back into a file

## Description

```php
public int|false DOMDocument::save(string $filename, int $options = 0)
```

Creates an XML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

## Parameters

- **`$filename`** — The path to the saved XML document.
- **`$options`** — Additional Options. Currently only LIBXML_NOEMPTYTAG is supported.

## Return Values

Returns the number of bytes written or `false` if an error occurred.

## Examples

**Saving a DOM tree into a file**

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

echo 'Wrote: ' . $doc->save("/tmp/test.xml") . ' bytes'; // Wrote: 72 bytes

?>

    
```

## See Also

`DOMDocument::saveXML()` `DOMDocument::load()` `DOMDocument::loadXML()`
