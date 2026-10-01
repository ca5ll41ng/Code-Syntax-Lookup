---
id: "en-php-function-dom-tokenlist-supports"
language: "php"
lang: "en"
category: "function"
name: "Dom\\TokenList::supports"
title: "Returns whether the given token is supported"
signature: "public bool Dom\\TokenList::supports(string $token)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-tokenlist.supports.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the given token is supported

## Description

```php
public bool Dom\TokenList::supports(string $token)
```

Returns whether `$token` is in the associated attribute's supported tokens.

## Parameters

- **`$token`** — The token.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Throws a TypeError when the attribute does not define a supported tokens list.
