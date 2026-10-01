---
id: "en-php-function-dom-tokenlist-toggle"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::toggle"
title: "Toggles the presence of a token in the list"
signature: "public bool Dom\\TokenList::toggle(string $token, bool|null $force = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.toggle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Toggles the presence of a token in the list

## Description

```php
public bool Dom\TokenList::toggle(string $token, bool|null $force = null)
```

Toggles the presence of `$token` in the list.

## Parameters

- **`$token`** — The token to toggle.
- **`$force`** — If `$force` is provided, setting it to `true` will add the token, and setting it to `false` will remove the token.

## Return Values

Returns `true` if the token is in the list after the call, `false` otherwise.

## Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code `Dom\SYNTAX_ERR` if a token is the empty string.
- Throws a Dom\DOMException with code `Dom\INVALID_CHARACTER_ERR` if a token contains any ASCII whitespace.

## Examples

**`Dom\TokenList::toggle()` example**

Toggles three classes, two without `$force`, and one with.

```php


<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
$classList->toggle('font-bold', 'font-small');
$classList->toggle('important', force: true);

echo $dom->saveHtml($p);
?>

   
```

The above example will output:

```text


<p class="font-bold important"></p>

   
```
