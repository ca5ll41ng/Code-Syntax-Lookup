---
id: "en-php-function-dom-tokenlist-contains"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::contains"
title: "Returns whether the list contains a given token"
signature: "public bool Dom\\TokenList::contains(string $token)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the list contains a given token

## Description

```php
public bool Dom\TokenList::contains(string $token)
```

Returns whether the list contains `$token`.

## Parameters

- **`$token`** — The token.

## Return Values

Returns `true` if the list contains `$token`, `false` otherwise.

## Examples

**`Dom\TokenList::contains()` example**

Checks whether two classes are present on the paragraph.

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
var_dump(
	$classList->contains('important'),
	$classList->contains('font-small'),
);
?>

   
```

The above example will output:

```text


bool(true)
bool(false)

   
```
