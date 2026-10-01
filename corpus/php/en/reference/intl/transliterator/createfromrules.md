---
id: "en-php-function-transliterator-createfromrules"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::createFromRules"
aliases: ["transliterator_create_from_rules"]
title: "Create transliterator from rules"
signature: "public static Transliterator|null Transliterator::createFromRules(string $rules, int $direction = Transliterator::FORWARD)"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.createfromrules.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create transliterator from rules

## Description

Object-oriented style

```php
public static Transliterator|null Transliterator::createFromRules(string $rules, int $direction = Transliterator::FORWARD)
```

Procedural style

```php
Transliterator|null transliterator_create_from_rules(string $rules, int $direction = Transliterator::FORWARD)
```

Creates a Transliterator from rules.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$rules`** — The rules as defined in Transform Rules Syntax of UTS #35: Unicode LDML.
- **`$direction`** — The direction, defaults to Transliterator::FORWARD. May also be set to Transliterator::REVERSE.

## Return Values

Returns a `Transliterator` object on success, or `null` on failure.

## See Also

`Transliterator::getErrorMessage()` `Transliterator::create()`
