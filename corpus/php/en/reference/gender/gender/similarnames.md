---
id: "en-php-function-gender-gender-similarnames"
language: "php"
lang: "en"
category: "function"
name: "Gender\\Gender::similarNames"
title: "Get similar names"
signature: "public array Gender\\Gender::similarNames(string $name, [int $country = ...])"
module: "gender"
source_url: "https://www.php.net/manual/en/gender-gender.similarnames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get similar names

## Description

```php
public array Gender\Gender::similarNames(string $name, [int $country = ...])
```

Get similar names for the given name and country.

## Parameters

- **`$name`** — Name to check.
- **`$country`** — Country id identified by Gender class constant. If ommited ANY_COUNTRY is used.

## Return Values

Returns an array with the similar names found.
