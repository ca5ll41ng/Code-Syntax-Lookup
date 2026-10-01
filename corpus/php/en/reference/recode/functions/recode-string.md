---
id: "en-php-function-function-recode-string"
language: "php"
lang: "en"
category: "function"
name: "recode_string"
title: "Recode a string according to a recode request"
signature: "string recode_string(string $request, string $string)"
module: "recode"
source_url: "https://www.php.net/manual/en/function.recode-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recode a string according to a recode request

## Description

```php
string recode_string(string $request, string $string)
```

Recode the string `$string` according to the recode request `$request`.

## Parameters

- **`$request`** — The desired recode request type
- **`$string`** — The `string` to be recoded

## Return Values

Returns the recoded `string` or `false`, if unable to perform the recode request.

## Examples

**Basic `recode_string()` example**

```php


<?php
echo recode_string("us..flat", "The following character has a diacritical mark: á");
?>


   
```

## Notes

A simple recode request may be "lat1..iso646-de".

## See Also

  The GNU Recode documentation of your installation for detailed instructions about recode requests.  `mb_convert_encoding()` `UConverter::transcode()` `iconv()`
