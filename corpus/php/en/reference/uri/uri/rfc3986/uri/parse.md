---
id: "en-php-function-uri-rfc3986-uri-parse"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::parse"
title: "Parse a URI"
signature: "public static static|null Uri\\Rfc3986\\Uri::parse(string $uri, Uri\\Rfc3986\\Uri|null $baseUrl = null)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a URI

## Description

```php
public static static|null Uri\Rfc3986\Uri::parse(string $uri, Uri\Rfc3986\Uri|null $baseUrl = null)
```

Parses a URI.

## Parameters

- **`$uri`** — URI to parse.
- **`$baseUrl`** — When a `string` is passed, `$uri` is applied on `$baseUrl`, if `$uri` is a relative reference. If either `null` is passed, or `$uri` is a not a relative reference, then `$baseUrl` doesn't have any effect.

## Return Values

Returns a `Uri\Rfc3986\Uri` instance on success, or `null` on failure.

## Examples

**`Uri\Rfc3986\Uri::parse()` basic example**

```php


<?php

$uri = \Uri\Rfc3986\Uri::parse("https://example.com");

if ($uri !== null) {
    echo "Valid URI: " . $uri->toString();
} else {
    echo "Invalid URI";
}

   
```

The above example will output:

```text


Valid URI: https://example.com

   
```

## See Also

 `Uri\Rfc3986\Uri::__construct()` `Uri\Rfc3986\Uri::resolve()` `Uri\WhatWg\Url::parse()`
