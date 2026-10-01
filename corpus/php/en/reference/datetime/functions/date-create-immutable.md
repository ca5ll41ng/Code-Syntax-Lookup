---
id: "en-php-function-function-date-create-immutable"
language: "php"
lang: "en"
category: "function"
name: "date_create_immutable"
title: "create a new `DateTimeImmutable` object"
signature: "DateTimeImmutable|false date_create_immutable(string $datetime = \"now\", DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/en/function.date-create-immutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# create a new `DateTimeImmutable` object

## Description

```php
DateTimeImmutable|false date_create_immutable(string $datetime = "now", DateTimeZone|null $timezone = null)
```

This is the procedural version of `DateTimeImmutable::__construct()`.

Unlike the `DateTimeImmutable` constructor, it will return `false` instead of an exception if the passed in `$datetime` string is invalid.

## Parameters

See DateTimeImmutable::__construct.

## Return Values

Returns a new DateTimeImmutable instance or `false` on failure

## See Also

 `DateTimeImmutable::createFromFormat()`
