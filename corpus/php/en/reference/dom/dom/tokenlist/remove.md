---
id: "en-php-function-dom-tokenlist-remove"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::remove"
title: "Removes the given tokens from the list"
signature: "public void Dom\\TokenList::remove(string $tokens)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes the given tokens from the list

## Description

```php
public void Dom\TokenList::remove(string $tokens)
```

Removes the given `$tokens` from the list, but ignores any that were not present.

## Parameters

- **`$tokens`** — The tokens to remove.

## Return Values

No value is returned.

## Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code `Dom\SYNTAX_ERR` if a token is the empty string.
- Throws a Dom\DOMException with code `Dom\INVALID_CHARACTER_ERR` if a token contains any ASCII whitespace.

## Examples

**`Dom\TokenList::remove()` example**

Removes two classes from the paragraph.

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$p->classList->remove('font-bold', 'important');

echo $dom->saveHtml($p);
?>

   
```

The above example will output:

```text


<p class=""></p>

   
```
