---
id: "en-php-function-spoofchecker-setallowedchars"
language: "php"
lang: "en"
category: "function"
name: "Spoofchecker::setAllowedChars"
title: "Set the set of characters allowed when running checks"
signature: "public void Spoofchecker::setAllowedChars(string $pattern, int $patternOptions = 0)"
module: "intl"
source_url: "https://www.php.net/manual/en/spoofchecker.setallowedchars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the set of characters allowed when running checks

## Description

```php
public void Spoofchecker::setAllowedChars(string $pattern, int $patternOptions = 0)
```

Restricts the characters that are considered acceptable by subsequent checks to the set described by `$pattern`. Any character outside of this set causes `Spoofchecker::isSuspicious()` to report a result.

## Parameters

- **`$pattern`** — A character set described as a `UnicodeSet` pattern, that is a regular-expression style character class. It must begin with `[` and end with `]`, for example `[a-z0-9]`.
- **`$patternOptions`** — A bitmask controlling how `$pattern` is interpreted. It must be `0`, or `Spoofchecker::IGNORE_SPACE` on its own or combined with exactly one of `Spoofchecker::CASE_INSENSITIVE`, `Spoofchecker::ADD_CASE_MAPPINGS`, or `Spoofchecker::SIMPLE_CASE_INSENSITIVE`.

## Return Values

No value is returned.

## Errors/Exceptions

Throws a ValueError if `$pattern` is not a valid character set pattern, or if `$patternOptions` is not a valid combination of options.

## Examples

**`Spoofchecker::setAllowedChars()` example**

```php


<?php
$checker = new Spoofchecker();
$checker->setAllowedChars('[a-z0-9]');

var_dump($checker->isSuspicious('hello'));
var_dump($checker->isSuspicious('héllo'));
?>

   
```

The above example will output:

```text


bool(false)
bool(true)

   
```

## See Also

 `Spoofchecker::setAllowedLocales()` `Spoofchecker::isSuspicious()`
