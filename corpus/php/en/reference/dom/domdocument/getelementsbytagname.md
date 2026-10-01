---
id: "en-php-function-domdocument-getelementsbytagname"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::getElementsByTagName"
title: "Searches for all elements with given local tag name"
signature: "public DOMNodeList DOMDocument::getElementsByTagName(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.getelementsbytagname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Searches for all elements with given local tag name

## Description

```php
public DOMNodeList DOMDocument::getElementsByTagName(string $qualifiedName)
```

This function returns a new instance of class `DOMNodeList` containing all the elements with a given local tag name.

## Parameters

- **`$qualifiedName`** — The local name (without namespace) of the tag to match on. The special value `*` matches all tags.

## Return Values

A new `DOMNodeList` object containing all the matched elements.

## Examples

**Basic Usage Example**

```php


<?php
$xml = <<< XML
<?xml version="1.0" encoding="utf-8"?>
<books>
 <book>Patterns of Enterprise Application Architecture</book>
 <book>Design Patterns: Elements of Reusable Software Design</book>
 <book>Clean Code</book>
</books>
XML;

$dom = new DOMDocument;
$dom->loadXML($xml);
$books = $dom->getElementsByTagName('book');
foreach ($books as $book) {
    echo $book->nodeValue, PHP_EOL;
}
?>

    
```

The above example will output:

```text


Patterns of Enterprise Application Architecture
Design Patterns: Elements of Reusable Software Design
Clean Code

    
```

## See Also

`DOMDocument::getElementsByTagNameNS()`
