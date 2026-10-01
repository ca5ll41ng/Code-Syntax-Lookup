---
id: "en-php-function-dom-tokenlist-replace"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::replace"
title: "Replaces a token in the list with another one"
signature: "public bool Dom\\TokenList::replace(string $token, string $newToken)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces a token in the list with another one

## Description

```php
public bool Dom\TokenList::replace(string $token, string $newToken)
```

Replaces a token in the list with another one.

## Parameters

- **`$token`** — The token to replace.
- **`$newToken`** — The new token.

## Return Values

Returns `true` if `$token` was in the list, `false` otherwise.

## Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code `Dom\SYNTAX_ERR` if a token is the empty string.
- Throws a Dom\DOMException with code `Dom\INVALID_CHARACTER_ERR` if a token contains any ASCII whitespace.

## Examples

**`Dom\TokenList::replace()` example**

Replaces a token in the paragraph with another one.

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$p->classList->replace('font-bold', 'font-small');

echo $dom->saveHtml($p);
?>

   
```

The above example will output:

```text


<p class="font-small important"></p>

   
```
