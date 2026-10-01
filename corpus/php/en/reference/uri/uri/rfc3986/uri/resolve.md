---
id: "en-php-function-uri-rfc3986-uri-resolve"
language: "php"
lang: "en"
category: "function"
name: "Uri\\Rfc3986\\Uri::resolve"
title: "Resolve a URI with the current object as the base URI"
signature: "public static Uri\\Rfc3986\\Uri::resolve(string $uri)"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-rfc3986-uri.resolve.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resolve a URI with the current object as the base URI

## Description

```php
public static Uri\Rfc3986\Uri::resolve(string $uri)
```

Resolves a URI - which may potentially be a relative reference - with the current object as the base URI.

## Parameters

- **`$uri`** — A URI to apply on the current object.

## Return Values

A new `Uri\Rfc3986\Uri` instance.

## Errors/Exceptions

If the resulting URI is invalid, a Uri\InvalidUriException is thrown.

## Examples

**`Uri\Rfc3986\Uri::resolve()` basic example**

```php


<?php

$uri = new \Uri\Rfc3986\Uri("https://example.com");
$uri = $uri->resolve("/foo");

echo $uri->toRawString();

   
```

The above example will output:

```text


https://example.com/foo

   
```

## See Also

 `Uri\Rfc3986\Uri::__construct()` `Uri\Rfc3986\Uri::parse()` `Uri\WhatWg\Url::resolve()`
