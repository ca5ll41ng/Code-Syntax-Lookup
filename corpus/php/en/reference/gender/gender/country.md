---
id: "en-php-function-gender-gender-country"
language: "php"
lang: "en"
category: "function"
name: "Gender\\Gender::country"
title: "Get textual country representation"
signature: "public array|false Gender\\Gender::country(int $country)"
module: "gender"
source_url: "https://www.php.net/manual/en/gender-gender.country.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get textual country representation

## Description

```php
public array|false Gender\Gender::country(int $country)
```

Returns the textual representation of a country from a Gender class constant.

## Parameters

- **`$country`** — A country ID specified by a `Gender\Gender` class constant.

## Return Values

Returns an array with the short and full names of the country on success or `false` on failure.

## Examples

**Using `Gender\Gender::country()`**

```php


$gender = new Gender\Gender;
var_dump($gender->country(Gender\Gender::BRITAIN));

   
```

The above example will output:

```text


array(2) {
  'country_short' =>
  string(2) "UK"
  'country' =>
  string(13) "Great Britain"
}

   
```
