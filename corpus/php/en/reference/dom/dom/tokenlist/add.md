---
id: "en-php-function-dom-tokenlist-add"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::add"
title: "Adds the given tokens to the list"
signature: "public void Dom\\TokenList::add(string $tokens)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds the given tokens to the list

## Description

```php
public void Dom\TokenList::add(string $tokens)
```

Adds the given `$tokens` to the list, but not any that were already present.

## Parameters

- **`$tokens`** — The tokens to add.

## Return Values

No value is returned.

## Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code `Dom\SYNTAX_ERR` if a token is the empty string.
- Throws a Dom\DOMException with code `Dom\INVALID_CHARACTER_ERR` if a token contains any ASCII whitespace.

## Examples

**`Dom\TokenList::add()` example**

Adds two classes to a newly created paragraph element.

```php


<?php
$dom = Dom\HTMLDocument::createEmpty();
$p = $dom->createElement('p');

$classList = $p->classList;
$classList->add('font-bold', 'important');

echo $dom->saveHtml($p);
?>

   
```

The above example will output:

```text


<p class="font-bold important"></p>

   
```
