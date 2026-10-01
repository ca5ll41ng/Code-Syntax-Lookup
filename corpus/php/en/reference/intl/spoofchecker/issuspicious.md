---
id: "en-php-function-spoofchecker-issuspicious"
language: "php"
lang: "en"
category: "function"
name: "Spoofchecker::isSuspicious"
title: "Checks if a given text contains any suspicious characters"
signature: "public bool Spoofchecker::isSuspicious(string $string, int $errorCode = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/spoofchecker.issuspicious.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a given text contains any suspicious characters

## Description

```php
public bool Spoofchecker::isSuspicious(string $string, int $errorCode = null)
```

Checks if given string contains any suspicious characters like letters which are almost identical visually, but are Unicode characters from different sets.

## Parameters

- **`$string`** — String to test.
- **`$errorCode`** — This variable is set by-reference to `integer` containing an error, if there was any.

## Return Values

Returns `true` if there are suspicious characters, `false` otherwise.

## Examples

**`Spoofchecker::isSuspicious()` example**

```php


<?php
$checker = new Spoofchecker();

$checker->isSuspicious('google.com'); // FALSE: only ASCII characters

$checker->isSuspicious('Рaypal.com'); // TRUE
// The first letter is from Cyrylic, not a regular latin "P"

    
```
