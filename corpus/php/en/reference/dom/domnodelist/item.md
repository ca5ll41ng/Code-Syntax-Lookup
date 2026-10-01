---
id: "en-php-function-domnodelist-item"
language: "php"
lang: "en"
category: "function"
name: "DOMNodeList::item"
title: "Retrieves a node specified by index"
signature: "public DOMElement|DOMNode|DOMNameSpaceNode|null DOMNodeList::item(int $index)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnodelist.item.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a node specified by index

## Description

```php
public DOMElement|DOMNode|DOMNameSpaceNode|null DOMNodeList::item(int $index)
```

Retrieves a node specified by `$index` within the `DOMNodeList` object.

> If you need to know the number of nodes in the collection, use the `length` property of the `DOMNodeList` object.

## Parameters

- **`$index`** — Index of the node into the collection.

## Return Values

The node at the `$index`th position in the `DOMNodeList`, or `null` if that is not a valid index.

## Examples

**Traversing all the entries of the table**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

for ($i = 0; $i < $items->length; $i++) {
    echo $items->item($i)->nodeValue . "\n";
}
?>

    
```

**Accessing item with array syntax**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

for ($i = 0; $i < $items->length; $i++) {
    echo $items[$i]->nodeValue . "\n";
}

?>

    
```

**Traversing items with **

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

foreach ($items as $item) {
    echo $item->nodeValue . "\n";
}
?>

    
```

The above example will output:

```text


Title
Author
Language
ISBN
The Grapes of Wrath
John Steinbeck
en
0140186409
The Pearl
John Steinbeck
en
014017737X
Samarcande
Amine Maalouf
fr
2253051209

    
```
