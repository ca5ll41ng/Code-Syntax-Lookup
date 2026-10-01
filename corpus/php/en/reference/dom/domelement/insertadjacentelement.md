---
id: "en-php-function-domelement-insertadjacentelement"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::insertAdjacentElement"
title: "Insert adjacent element"
signature: "public DOMElement|null DOMElement::insertAdjacentElement(string $where, DOMElement $element)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.insertadjacentelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert adjacent element

## Description

```php
public DOMElement|null DOMElement::insertAdjacentElement(string $where, DOMElement $element)
```

Inserts an element at a relative position given by `$where`.

## Parameters

- **`$where`** — `beforebegin` - Insert before the target element. `afterbegin` - Insert as the first child of the target element. `beforeend` - Insert as the last child of the target element. `afterend` - Insert after the target element.
- **`$element`** — The element to insert.

## Return Values

Return `DOMElement` or `null` on failure.

## Examples

**`DOMElement::insertAdjacentElement()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><container><p>foo</p></container>');
$container = $dom->documentElement;
$p = $container->firstElementChild;

$p->insertAdjacentElement('beforebegin', $dom->createElement('A'));
echo $dom->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><A/><p>foo</p></container>

   
```

## See Also

`DOMElement::insertAdjacentText()`
