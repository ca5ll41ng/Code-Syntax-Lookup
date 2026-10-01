---
id: "en-php-function-gender-gender-isnick"
language: "php"
lang: "en"
category: "function"
name: "Gender\\Gender::isNick"
title: "Check if the name0 is an alias of the name1"
signature: "public array Gender\\Gender::isNick(string $name0, string $name1, [int $country = ...])"
module: "gender"
source_url: "https://www.php.net/manual/en/gender-gender.isnick.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if the name0 is an alias of the name1

## Description

```php
public array Gender\Gender::isNick(string $name0, string $name1, [int $country = ...])
```

Check whether the name0 is a nick of the name1.

## Parameters

- **`$name0`** — Name to check.
- **`$name1`** — Name to check.
- **`$country`** — Country id identified by Gender class constant. If ommited ANY_COUNTRY is used.

## Return Values

Returns `true` on success or `false` on failure.
