---
id: "en-php-function-spoofchecker-areconfusable"
language: "php"
lang: "en"
category: "function"
name: "Spoofchecker::areConfusable"
title: "Checks if given strings can be confused"
signature: "public bool Spoofchecker::areConfusable(string $string1, string $string2, int $errorCode = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/spoofchecker.areconfusable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if given strings can be confused

## Description

```php
public bool Spoofchecker::areConfusable(string $string1, string $string2, int $errorCode = null)
```

Checks whether two given strings can easily be mistaken.

## Parameters

- **`$string1`** — First string to check.
- **`$string2`** — Second string to check.
- **`$errorCode`** — This variable is set by-reference to `integer` containing an error, if there was any.

## Return Values

Returns `true` if two given strings can be confused, `false` otherwise.

## Examples

**`Spoofchecker::areConfusable()` example**

```php


<?php
$checker = new Spoofchecker();

$checker->areConfusable('google.com', 'goog1e.com'); // true
// Lower l can be confused with digit one

$checker->areConfusable('google.com', 'g00g1e.com'); // false
// Zero (0) cannot be easily confused with "o" letter

    
```
