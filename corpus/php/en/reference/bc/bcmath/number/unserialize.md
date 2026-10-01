---
id: "en-php-function-bcmath-number-unserialize"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::__unserialize"
title: "Deserializes a data parameter into a BcMath\\Number object"
signature: "public void BcMath\\Number::__unserialize(array $data)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deserializes a data parameter into a BcMath\Number object

## Description

```php
public void BcMath\Number::__unserialize(array $data)
```

Deserializes a data parameter into a `BcMath\Number` object.

## Parameters

- **`$data`** — The serialized data parameter as an associative `array`

## Errors/Exceptions

This method throws a ValueError if invalid serialized data is passed.

## See Also

 `BcMath\Number::__construct()` `BcMath\Number::serialize()`
