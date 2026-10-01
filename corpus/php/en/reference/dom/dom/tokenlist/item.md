---
id: "en-php-function-dom-tokenlist-item"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::item"
title: "Returns a token from the list"
signature: "public string|null Dom\\TokenList::item(int $index)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.item.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a token from the list

## Description

```php
public string|null Dom\TokenList::item(int $index)
```

Returns a token from the list at `$index`.

## Parameters

- **`$index`** — The token index.

## Return Values

Returns the token at `$index` or `null` when the index is out of bounds.

## Examples

**`Dom\TokenList::item()` example**

Accesses a valid index and an invalid index.

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
var_dump(
	$classList->item(0),
	$classList->item(100),
);
?>

   
```

The above example will output:

```text


string(9) "font-bold"
NULL

   
```

## Notes

> This method is equivalent to using array access syntax.
