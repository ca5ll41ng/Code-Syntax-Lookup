---
id: "en-php-function-transliterator-create"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::create"
aliases: ["transliterator_create"]
title: "Create a transliterator"
signature: "public static Transliterator|null Transliterator::create(string $id, int $direction = Transliterator::FORWARD)"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a transliterator

## Description

Object-oriented style

```php
public static Transliterator|null Transliterator::create(string $id, int $direction = Transliterator::FORWARD)
```

Procedural style

```php
Transliterator|null transliterator_create(string $id, int $direction = Transliterator::FORWARD)
```

Opens a Transliterator by ID.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$id`** — The ID. A list of all registered transliterator IDs can be retrieved by using `Transliterator::listIDs()`.
- **`$direction`** — The direction, defaults to Transliterator::FORWARD. May also be set to Transliterator::REVERSE.

## Return Values

Returns a `Transliterator` object on success, or `null` on failure.

## See Also

`Transliterator::getErrorMessage()` `Transliterator::__construct()`
