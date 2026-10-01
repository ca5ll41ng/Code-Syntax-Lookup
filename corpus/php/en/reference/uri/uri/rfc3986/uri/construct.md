---
id: "en-php-function-uri-rfc3986-uri-construct"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::__construct"
title: "Construct the Uri object"
signature: "public Uri\\Rfc3986\\Uri::__construct(string $uri, Uri\\Rfc3986\\Uri|null $baseUrl = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct the Uri object

## Description

```php
public Uri\Rfc3986\Uri::__construct(string $uri, Uri\Rfc3986\Uri|null $baseUrl = null)
```

Constructs the `Uri\Rfc3986\Uri` object.

## Parameters

- **`$uri`** — URI to parse.
- **`$baseUrl`** — When a `string` is passed, `$uri` is applied on `$baseUrl`, if `$uri` is a relative reference. If either `null` is passed, or `$uri` is a not a relative reference, then `$baseUrl` doesn't have any effect.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## See Also

 `Uri\Rfc3986\Uri::parse()` `Uri\Rfc3986\Uri::resolve()` `Uri\WhatWg\Url::__construct()`
