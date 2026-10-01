---
id: "en-php-function-domelement-insertadjacenttext"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::insertAdjacentText"
title: "Insert adjacent text"
signature: "public void DOMElement::insertAdjacentText(string $where, string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.insertadjacenttext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert adjacent text

## Description

```php
public void DOMElement::insertAdjacentText(string $where, string $data)
```

Inserts text at a relative position given by `$where`.

## Parameters

- **`$where`** — `beforebegin` - Insert before the target element. `afterbegin` - Insert as the first child of the target element. `beforeend` - Insert as the last child of the target element. `afterend` - Insert after the target element.
- **`$data`** — The string to insert.

## Return Values

No value is returned.

## Examples

**`DOMElement::insertAdjacentText()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><container><p>H</p></container>');

$container = $dom->documentElement;
$p = $container->firstElementChild;

$p->insertAdjacentText("afterbegin", "P");
$p->insertAdjacentText("beforeend", "P");

echo $dom->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><p>PHP</p></container>

   
```

## See Also

`DOMElement::insertAdjacentElement()`
