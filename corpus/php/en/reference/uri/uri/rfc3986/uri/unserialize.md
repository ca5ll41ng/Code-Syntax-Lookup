---
id: "en-php-function-uri-rfc3986-uri-unserialize"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::__unserialize"
title: "Deserialize the data parameter into a Uri object"
signature: "public void Uri\\Rfc3986\\Uri::__unserialize(array $data)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deserialize the data parameter into a Uri object

## Description

```php
public void Uri\Rfc3986\Uri::__unserialize(array $data)
```

Deserializes a data parameter into a `Uri\Rfc3986\Uri` object.

## Parameters

- **`$data`** — The serialized data as an `array`.

## Return Values

No value is returned.

## Errors/Exceptions

If the `__unserialize()` method is called on an already existing URI, Error is thrown.

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## See Also

 `Uri\Rfc3986\Uri::__serialize()` `Uri\WhatWg\Url::__unserialize()`
