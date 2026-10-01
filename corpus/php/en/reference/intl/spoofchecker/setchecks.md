---
id: "en-php-function-spoofchecker-setchecks"
language: "php"
lang: "en"
category: "function"
name: "Spoofchecker::setChecks"
title: "Set the checks to run"
signature: "public void Spoofchecker::setChecks(int $checks)"
module: "intl"
source_url: "https://www.php.net/manual/en/spoofchecker.setchecks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the checks to run

## Description

```php
public void Spoofchecker::setChecks(int $checks)
```

Sets the checks that will be performed by `SpoofChecker::isSuspicious()`.

## Parameters

- **`$checks`** — The checks that will be performed by `SpoofChecker::isSuspicious()`. A bitmask of `Spoofchecker::SINGLE_SCRIPT_CONFUSABLE`, `Spoofchecker::MIXED_SCRIPT_CONFUSABLE`, `Spoofchecker::WHOLE_SCRIPT_CONFUSABLE`, `Spoofchecker::ANY_CASE`, `Spoofchecker::SINGLE_SCRIPT`, `Spoofchecker::INVISIBLE`, or `Spoofchecker::CHAR_LIMIT`. Defaults to all checks as of ICU 58; prior to that version, `Spoofchecker::SINGLE_SCRIPT` was excluded.

## Return Values

No value is returned.
