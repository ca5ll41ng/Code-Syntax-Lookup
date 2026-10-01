---
id: "en-php-function-function-date-create"
language: "php"
lang: "en"
category: "function"
name: "date_create"
title: "create a new `DateTime` object"
signature: "DateTime|false date_create(string $datetime = \"now\", DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/en/function.date-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# create a new `DateTime` object

## Description

```php
DateTime|false date_create(string $datetime = "now", DateTimeZone|null $timezone = null)
```

This is the procedural version of `DateTime::__construct()`.

Unlike the `DateTime` constructor, it will return `false` instead of an exception if the passed in `$datetime` string is invalid.

## Parameters

See DateTimeImmutable::__construct.

## Return Values

Returns a new DateTime instance or `false` on failure

## See Also

 `DateTimeImmutable::__construct()` `DateTimeImmutable::createFromFormat()` `DateTime::__construct()`
