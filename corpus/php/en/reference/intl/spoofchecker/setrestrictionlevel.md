---
id: "en-php-function-spoofchecker-setrestrictionlevel"
language: "php"
lang: "en"
category: "function"
name: "Spoofchecker::setRestrictionLevel"
title: "Set the restriction level"
signature: "public void Spoofchecker::setRestrictionLevel(int $level)"
module: "intl"
source_url: "https://www.php.net/manual/en/spoofchecker.setrestrictionlevel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the restriction level

## Description

```php
public void Spoofchecker::setRestrictionLevel(int $level)
```

Sets the restriction level of `SpoofChecker::isSuspicious()`.

## Parameters

- **`$level`** — The restriction level of `SpoofChecker::isSuspicious()`. One of `Spoofchecker::ASCII`, `Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE`, `Spoofchecker::HIGHLY_RESTRICTIVE`, `Spoofchecker::MODERATELY_RESTRICTIVE`, `Spoofchecker::MINIMALLY_RESTRICTIVE`, or `Spoofchecker::UNRESTRICTIVE`. Defaults to `Spoofchecker::HIGHLY_RESTRICTIVE`.

## Return Values

No value is returned.
