---
id: "en-php-function-parle-parser-sigil"
language: "php"
lang: "en"
category: "function"
name: "Parle\\Parser::sigil"
title: "Retrieve a matching part of a rule"
signature: "public string Parle\\Parser::sigil(int $idx)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-parser.sigil.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve a matching part of a rule

## Description

```php
public string Parle\Parser::sigil(int $idx)
```

Retrieve a part of the match by a rule. This method is equivalent to the pseudo variable functionality in Bison.

## Parameters

- **`$idx`** — Match index, zero based.

## Return Values

Returns a `string` with the matched part.
